import type { DestinationWaypoint } from '../types';

export const DESTINATIONS: DestinationWaypoint[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya Rock Fortress',
    nativeName: 'සීගිරිය',
    region: 'Cultural Triangle',
    coordinates: '7.9570° N, 80.7603° E',
    lat: 7.9570,
    lng: 80.7603,
    elevation: '349 m (1,145 ft)',
    bestSeason: 'December – April & July – September',
    travelTime: '3.5 hrs via private chauffeur / 35 mins via seaplane',
    tag: '5th Century Citadel in the Clouds',
    image: '/images/sigiriya.jpg',
    summary: 'King Kashyapa’s gravity-defying palace perched on an obsidian monolith rising sheer above the emerald jungle canopy, adorned with luminous celestial frescoes and the colossal paws of a guardian lion.',
    highlights: [
      'Private dawn ascent before public gates open',
      'The Mirror Wall inscribed with 1,000-year-old poetry',
      'Terraced water gardens with hydraulic ancient fountains',
      'Champagne breakfast overlooking Pidurangala Rock'
    ],
    luxuryLodges: ['Water Garden Sigiriya', 'Jetwing Vil Uyana', 'Heritance Kandalama']
  },
  {
    id: 'ella',
    name: 'Ella & Nine Arches Bridge',
    nativeName: 'ඇල්ල',
    region: 'Hill Country',
    coordinates: '6.8667° N, 81.0466° E',
    lat: 6.8667,
    lng: 81.0466,
    elevation: '1,041 m (3,415 ft)',
    bestSeason: 'January – May & August – September',
    travelTime: 'Scenic Viceroy vintage train ride through misty gaps',
    tag: 'The Misty Tea Country & Viaduct of the Gods',
    image: '/images/ella_train.jpg',
    summary: 'Where cloud forests yield to emerald terraced tea estates. The colonial Nine Arches stone viaduct spans dense ravines without a single piece of steel, enveloped in morning valley mist as the iconic blue train glides past.',
    highlights: [
      'Exclusive balcony viewing deck reserved at the Nine Arches Viaduct',
      'Private Ceylon Tea Masterclass at historic 19th-century factory',
      'Helicopter charter landing at tea planter’s colonial bungalow',
      'Sunrise hike to Little Adam’s Peak and Ravana Falls gorge'
    ],
    luxuryLodges: ['Ceylon Tea Trails', '98 Acres Resort & Spa', 'Goatfell Nuwara Eliya']
  },
  {
    id: 'dambulla',
    name: 'Dambulla Royal Cave Monasteries',
    nativeName: 'දඹුල්ල',
    region: 'Cultural Triangle',
    coordinates: '7.8742° N, 80.6511° E',
    lat: 7.8742,
    lng: 80.6511,
    elevation: '160 m (525 ft)',
    bestSeason: 'Year-round spiritual serenity',
    travelTime: '20 mins south of Sigiriya',
    tag: 'Living 2,000-Year Subterranean Sanctuary',
    image: '/images/dambulla.jpg',
    summary: 'Five massive carved cavern chambers gilded in warm lantern light, housing 153 sublime statues of Buddha and 2,100 square meters of intricate ceiling murals that have whispered devotion since the 1st century BCE.',
    highlights: [
      'Private twilight entry with head monk blessing ceremony',
      'The sacred ceiling mural depicting the epic Mahawamsa chronicle',
      'Ancient dripping holy water cistern untouched by seasonal drought',
      'Acoustic meditation bells in the Great New Temple cave'
    ],
    luxuryLodges: ['Ulagalla by Uga Escapes', 'Amaya Lake', 'Kalundewa Retreat']
  },
  {
    id: 'kandy',
    name: 'Sacred Kandy & The Temple of the Tooth',
    nativeName: 'මහනුවර',
    region: 'Hill Country',
    coordinates: '7.2906° N, 80.6337° E',
    lat: 7.2906,
    lng: 80.6337,
    elevation: '500 m (1,640 ft)',
    bestSeason: 'December – April & August (Esala Perahera Festival)',
    travelTime: '2.5 hrs scenic drive through spice hills',
    tag: 'The Last Royal Capital of Ceylon',
    image: '/images/kandyan_dancers.jpg',
    summary: 'Encircled by sacred forested peaks and an emerald ornamental lake, Kandy preserves Ceylon’s living spiritual soul. Here, fire-torch Ves dancers perform ancient cosmic rites to the thundering rhythm of Geta Beraya drums.',
    highlights: [
      'VIP inner sanctum access during the Sacred Tooth Relic Thevava puja',
      'Curated private performance by hereditary Master Ves dancers',
      'Private botanical expedition through Peradeniya Royal Orchids',
      'Dinner on the royal pavilion overlooking the lantern-lit lake'
    ],
    luxuryLodges: ['Santani Wellness Kandy', 'W15 Hanthana Estate', 'The Kandy House']
  },
  {
    id: 'kitulgala',
    name: 'Kitulgala & Kelani Rainforest',
    nativeName: 'කිතුල්ගල',
    region: 'Rainforest & Wilderness',
    coordinates: '6.9936° N, 80.4147° E',
    lat: 6.9936,
    lng: 80.4147,
    elevation: '180 m (590 ft)',
    bestSeason: 'November – April',
    travelTime: '2 hrs from Colombo via pristine rubber and palm valleys',
    tag: 'Adrenaline on the Churning Kelani Rapids',
    image: '/images/kitulgala_rafting.jpg',
    summary: 'The untamed jungle cradle where dramatic class IV whitewater rapids roar through prehistoric moss canopies. Famed as the filming location for "The Bridge on the River Kwai", it offers prime canyoning and natural water slides.',
    highlights: [
      'Grade III and IV whitewater rafting expedition with expedition guides',
      'Hidden canyon abseiling and secret rock pool jumps',
      'Prehistoric cave exploration of the 30,000-year-old Balangoda Man',
      'Riverside wooden luxury glamping with organic forest barbecue'
    ],
    luxuryLodges: ['Moksha Kitulgala', 'Palmstone Retreat', 'Borderlands Eco Lodge']
  },
  {
    id: 'galle',
    name: 'Galle Fort & Weligama Ocean Coast',
    nativeName: 'ගාල්ල',
    region: 'Southern Coast',
    coordinates: '6.0535° N, 80.2210° E',
    lat: 6.0535,
    lng: 80.2210,
    elevation: '12 m (39 ft)',
    bestSeason: 'November – April (Pelagic Whales & Calm Turquoise Waters)',
    travelTime: '1.5 hrs southern expressway from Colombo',
    tag: 'UNESCO Bastions & Lapis Lazuli Surf',
    image: '/images/galle_lighthouse.jpg',
    summary: '17th-century coral and granite Dutch ramparts jutting into the roaring Indian Ocean, harboring cobblestone laneways of artisan jewelers, spice merchants, and restored colonial mansions. Just down the coast, stilt fishermen balance above crystalline surf.',
    highlights: [
      'Private sunset walk along the ramparts with a local historian',
      'Private chartered catamaran whale safari tracking pygmy blue whales',
      'Bespoke Ceylon sapphire inspection with heritage master gem cutters',
      'Beachside candlelit seafood banquet with lagoon mud crabs'
    ],
    luxuryLodges: ['Amangalla Galle', 'Cape Weligama', 'Kahanda Kanda']
  }
];
