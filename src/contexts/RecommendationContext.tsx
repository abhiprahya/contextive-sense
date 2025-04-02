
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import { ContentItem, mockContentData } from '@/data/contentData';

interface RecommendationContextType {
  recommendedContent: ContentItem[];
  userIntent: string;
  intentConfidence: number;
  userMood: string;
  loading: boolean;
  setUserIntent: (intent: string, confidence: number) => void;
  setUserMood: (mood: string) => void;
  refreshRecommendations: () => void;
}

const RecommendationContext = createContext<RecommendationContextType | undefined>(undefined);

export const RecommendationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recommendedContent, setRecommendedContent] = useState<ContentItem[]>([]);
  const [userIntent, setIntent] = useState<string>('informational');
  const [intentConfidence, setIntentConfidence] = useState<number>(70);
  const [userMood, setMood] = useState<string>('neutral');
  const [loading, setLoading] = useState<boolean>(true);

  const filterContentByUserContext = () => {
    // This would normally be a more sophisticated algorithm with ML/AI
    // For now, we'll simulate it with basic filtering
    
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filtered = [...mockContentData];
      
      // Filter by intent
      if (userIntent) {
        filtered = filtered.filter(item => 
          item.intent.includes(userIntent) || 
          Math.random() > 0.3 // Add some randomness to simulate ML prediction
        );
      }
      
      // Filter by mood
      if (userMood) {
        filtered = filtered.filter(item => 
          item.mood.includes(userMood) || 
          Math.random() > 0.3 // Add some randomness to simulate ML prediction
        );
      }
      
      // Sort by confidence (simulated)
      filtered = filtered.map(item => ({
        ...item,
        confidence: Math.min(
          Math.max(
            item.confidence * 
            (item.intent.includes(userIntent) ? 1.2 : 0.8) * 
            (item.mood.includes(userMood) ? 1.2 : 0.9),
            30
          ), 
          98
        )
      }));
      
      // Sort by confidence
      filtered.sort((a, b) => b.confidence - a.confidence);
      
      setRecommendedContent(filtered);
      setLoading(false);
      
      toast.success('Recommendations updated based on your context');
    }, 800);
  };

  // Update recommendations when context changes
  useEffect(() => {
    filterContentByUserContext();
  }, [userIntent, intentConfidence, userMood]);

  const setUserIntent = (intent: string, confidence: number) => {
    setIntent(intent);
    setIntentConfidence(confidence);
  };

  const setUserMood = (mood: string) => {
    setMood(mood);
  };

  const refreshRecommendations = () => {
    filterContentByUserContext();
  };

  return (
    <RecommendationContext.Provider
      value={{
        recommendedContent,
        userIntent,
        intentConfidence,
        userMood,
        loading,
        setUserIntent,
        setUserMood,
        refreshRecommendations,
      }}
    >
      {children}
    </RecommendationContext.Provider>
  );
};

export const useRecommendations = () => {
  const context = useContext(RecommendationContext);
  if (context === undefined) {
    throw new Error('useRecommendations must be used within a RecommendationProvider');
  }
  return context;
};
