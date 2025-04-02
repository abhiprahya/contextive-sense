
export interface ContentItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  source: string;
  time: string;
  category: string;
  platform: string;
  engagement: number;
  confidence: number;
  tags: string[];
  type: 'news' | 'article' | 'video' | 'podcast' | 'social';
  mood: string[];
  intent: string[];
}

export const mockContentData: ContentItem[] = [
  {
    id: "1",
    title: "Global Tech Conference Reveals Breakthrough AI Models",
    description: "New advancements in artificial intelligence were unveiled at the annual Global Tech Summit, promising revolutionary changes across industries.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Tech Insider",
    time: "2h ago",
    category: "Technology",
    platform: "Web",
    engagement: 87,
    confidence: 92,
    tags: ["AI", "tech", "conference", "innovation"],
    type: "news",
    mood: ["positive", "neutral"],
    intent: ["informational"]
  },
  {
    id: "2",
    title: "Top 5 Financial Investments for 2024",
    description: "Financial experts share insights on the most promising investment opportunities in various markets for the upcoming year.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Finance Today",
    time: "5h ago",
    category: "Finance",
    platform: "Web",
    engagement: 76,
    confidence: 84,
    tags: ["investing", "finance", "markets", "2024"],
    type: "article",
    mood: ["neutral"],
    intent: ["informational", "transactional"]
  },
  {
    id: "3",
    title: "Championship Final Ends in Dramatic Overtime Victory",
    description: "In a stunning turn of events, the underdog team clinched the championship title after a nail-biting overtime period.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Sports Network",
    time: "12h ago",
    category: "Sports",
    platform: "Mobile",
    engagement: 94,
    confidence: 88,
    tags: ["sports", "championship", "competition", "victory"],
    type: "news",
    mood: ["positive"],
    intent: ["entertainment"]
  },
  {
    id: "4",
    title: "New Study Reveals Health Benefits of Mediterranean Diet",
    description: "Researchers have found additional evidence supporting the numerous health benefits associated with following a Mediterranean diet.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Health Journal",
    time: "1d ago",
    category: "Health",
    platform: "Web",
    engagement: 72,
    confidence: 78,
    tags: ["health", "diet", "nutrition", "research"],
    type: "article",
    mood: ["positive", "neutral"],
    intent: ["informational"]
  },
  {
    id: "5",
    title: "Streaming Service Announces New Original Series",
    description: "A major streaming platform has unveiled plans for an ambitious new original series featuring award-winning actors and directors.",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Entertainment Weekly",
    time: "3h ago",
    category: "Entertainment",
    platform: "Social",
    engagement: 89,
    confidence: 95,
    tags: ["streaming", "entertainment", "series", "shows"],
    type: "news",
    mood: ["positive", "neutral"],
    intent: ["entertainment"]
  },
  {
    id: "6",
    title: "How to Optimize Your Work-From-Home Setup",
    description: "Experts share tips and tricks for creating an ergonomic and productive home office environment for remote work.",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Workplace Magazine",
    time: "2d ago",
    category: "Lifestyle",
    platform: "Mobile",
    engagement: 67,
    confidence: 72,
    tags: ["remote work", "home office", "productivity", "ergonomics"],
    type: "article",
    mood: ["neutral"],
    intent: ["informational", "navigational"]
  },
  {
    id: "7",
    title: "New Smartphone Features Revolutionary Camera Technology",
    description: "The latest flagship smartphone release includes groundbreaking camera innovations that set new standards for mobile photography.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Tech Radar",
    time: "6h ago",
    category: "Technology",
    platform: "Mobile",
    engagement: 85,
    confidence: 90,
    tags: ["smartphone", "camera", "technology", "photography"],
    type: "news",
    mood: ["positive"],
    intent: ["informational", "transactional"]
  },
  {
    id: "8",
    title: "Travel Destinations Expected to Trend in 2024",
    description: "Travel experts predict the most popular and emerging destinations for travelers in the coming year.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Travel Magazine",
    time: "1d ago",
    category: "Travel",
    platform: "Social",
    engagement: 78,
    confidence: 82,
    tags: ["travel", "destinations", "tourism", "vacation"],
    type: "article",
    mood: ["positive"],
    intent: ["entertainment", "informational"]
  },
  {
    id: "9",
    title: "Interview with Rising Music Star on New Album Release",
    description: "An exclusive interview with the breakout artist of the year discussing their creative process and upcoming album.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Music Now",
    time: "4h ago",
    category: "Entertainment",
    platform: "Web",
    engagement: 91,
    confidence: 86,
    tags: ["music", "interview", "album", "artist"],
    type: "video",
    mood: ["positive"],
    intent: ["entertainment"]
  },
  {
    id: "10",
    title: "Market Analysis: Stocks to Watch This Quarter",
    description: "Financial analysts provide insights on promising stocks and market trends for investors to consider in the current quarter.",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Market Watch",
    time: "7h ago",
    category: "Finance",
    platform: "Web",
    engagement: 83,
    confidence: 79,
    tags: ["stocks", "finance", "investing", "market"],
    type: "article",
    mood: ["neutral"],
    intent: ["informational", "transactional"]
  }
];
