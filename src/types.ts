export type Currency = 'USD' | 'EUR' | 'GBP' | 'LKR';

export interface CurrencyRate {
  rate: number;
  symbol: string;
  prefix: string;
}

export interface DestinationWaypoint {
  id: string;
  name: string;
  nativeName?: string;
  region: 'Cultural Triangle' | 'Hill Country' | 'Southern Coast' | 'Wild Plains' | 'Rainforest & Wilderness' | 'Northern Heritage';
  coordinates: string;
  lat: number;
  lng: number;
  elevation: string;
  bestSeason: string;
  travelTime: string;
  tag: string;
  image: string;
  summary: string;
  highlights: string[];
  luxuryLodges: string[];
}

export interface ExpeditionDay {
  day: number;
  title: string;
  location: string;
  activities: string[];
}

export interface ExpeditionJourney {
  id: string;
  title: string;
  subtitle: string;
  durationDays: number;
  pace: 'Gentle & Unhurried' | 'Immersive Discovery' | 'Active Exploration';
  groupSize: string;
  basePriceUSD: number;
  heroImage: string;
  galleryImages: string[];
  tags: string[];
  rarityBadge?: string;
  summary: string;
  editorialQuote: string;
  dayPlan: ExpeditionDay[];
  inclusions: string[];
  exclusivePrivileges: string[];
}

export interface CulinaryHighlight {
  id: string;
  name: string;
  sinhalaName: string;
  tagline: string;
  description: string;
  keyIngredients: string[];
  flavorProfile: string[];
  pairing: string;
  image: string;
}

export interface TeaTerroir {
  id: string;
  region: string;
  elevationMeters: string;
  character: string;
  flavorNotes: string[];
  prominentEstates: string[];
  liquorColor: string;
  bestPluckingSeason: string;
}

export interface CulturalTradition {
  id: string;
  title: string;
  nativeTitle: string;
  era: string;
  summary: string;
  image: string;
  ritualSignificance: string;
  elements: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  region: string;
  coordinates: string;
  cameraNotes: string;
  image: string;
  category: 'Citadels' | 'Highlands' | 'Wildlife' | 'Coastline' | 'Heritage' | 'Gastronomy';
}

export interface BespokePlanState {
  style: 'Royal Heritage' | 'Highland Mist & Tea' | 'Wild Coastal Luxury' | 'Ayurvedic Sanctuary' | 'Active Expedition';
  duration: number; // 7, 10, 14, 21 days
  transport: 'Scenic Air & Chauffeur' | 'Private Railway & Helicopter' | 'Luxury Dedicated Chauffeur Guide';
  lodgingTier: 'Signature Tea Bungalows & Royal Villas' | 'Eco-Luxury Safari Tents & Private Reserves' | 'Oceanfront Estates & Historic Mansions';
  travelers: number;
  season: 'Winter Sun (Dec-Apr)' | 'Highland Bloom (May-Aug)' | 'East Coast Lull (Jul-Oct)' | 'Any Season';
}
