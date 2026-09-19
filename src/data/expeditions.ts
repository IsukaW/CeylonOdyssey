import type { ExpeditionJourney } from '../types';

export const EXPEDITIONS: ExpeditionJourney[] = [
  {
    id: 'royal-heritage',
    title: 'The Royal Heritage & Sacred Citadels',
    subtitle: 'From the Lion Rock Cloud Citadel to Sacred Kandy Relics',
    durationDays: 8,
    pace: 'Immersive Discovery',
    groupSize: 'Private Bespoke (2–6 Guests)',
    basePriceUSD: 5400,
    heroImage: '/images/sigiriya.jpg',
    galleryImages: [
      '/images/sigiriya.jpg',
      '/images/dambulla.jpg',
      '/images/kandyan_dancers.jpg'
    ],
    tags: ['UNESCO Heritage', 'Private Archaeology', 'Royal Citadels'],
    rarityBadge: 'Signature Curated',
    summary: 'Traverse 2,500 years of celestial royal architecture, subterranean cave murals, and the living rituals of Kandy’s Sacred Tooth Relic accompanied by premier archaeologists and private historians.',
    editorialQuote: '“To stand upon Sigiriya as dawn breaks across the canopy is to witness the ambition of ancient kings sculpted into the sheer obsidian sky.”',
    dayPlan: [
      {
        day: 1,
        title: 'Arrival & Jetlag Sanctuary at Wallawwa',
        location: 'Negombo Coconut Groves',
        activities: [
          'VIP tarmac greeting and fast-track immigration clearance',
          'Chauffeured transfer to an 18th-century restored colonial manor',
          'Ayurvedic herbal marma massage and welcome Ceylon tea infusion'
        ]
      },
      {
        day: 2,
        title: 'Into the Cultural Triangle & Dambulla Lantern Entry',
        location: 'Dambulla',
        activities: [
          'Scenic journey north through palm forests and cinnamon groves',
          'Private twilight access to Dambulla Cave Temples with resident scholar',
          'Arrival at private lake villa with lotus floating pool'
        ]
      },
      {
        day: 3,
        title: 'Dawn Ascent of Sigiriya & Cloud Frescoes',
        location: 'Sigiriya Rock Fortress',
        activities: [
          'Pre-dawn exclusive entry to the Lion Rock before sunrise',
          'Inspect the 5th-century celestial cloud maidens frescoes with archival lights',
          'Champagne and tropical fruit breakfast served atop Pidurangala view terrace',
          'Evening bullock cart culinary village dinner on emerald banana leaves'
        ]
      },
      {
        day: 4,
        title: 'Ancient Polonnaruwa by Bespoke Vintage Cycles',
        location: 'Polonnaruwa Citadel',
        activities: [
          'Guided cycling through the colossal ruins of the Gal Vihara rock statues',
          'Parakrama Samudra inland sea catamaran sail at dusk',
          'Private torchlit dinner amidst ancient stone pillars'
        ]
      },
      {
        day: 5,
        title: 'Spice Hills & Sacred Realm of Kandy',
        location: 'Kandy Kingdom',
        activities: [
          'Ascent into the central misty mountain tier through Matale spice gardens',
          'Private residence check-in at luxury estate perched above Hanthana range',
          'Twilight drumming ceremony and the Sacred Tooth Relic puja'
        ]
      },
      {
        day: 6,
        title: 'Royal Botanical Gardens & Ves Dance Private Masterclass',
        location: 'Peradeniya & Kandy',
        activities: [
          'VIP botanical tour through 4,000 species of tropical orchids and imperial palms',
          'Exclusive Ves dance performance and drum session with 6th-generation hereditary masters',
          'Private fine dining dinner curated by celebrity Sri Lankan chef'
        ]
      },
      {
        day: 7,
        title: 'Scenic Seaplane Return & Colombo Colonial Evening',
        location: 'Colombo Fort',
        activities: [
          'Cast off on scenic floatplane flight over the emerald highlands',
          'Private heritage walk through the historic Colombo Fort and Old Dutch Hospital',
          'Tasting menu at Ministry of Crab pairing giant lagoon crabs with vintage champagne'
        ]
      },
      {
        day: 8,
        title: 'Bespoke Departure',
        location: 'Bandaranaike International Airport',
        activities: [
          'Breakfast in the colonial courtyard',
          'Private chauffeur transfer to airport executive terminal'
        ]
      }
    ],
    inclusions: [
      'All 5-star & boutique heritage villa suites',
      'Dedicated expert private chauffeur guide & archaeologist accompaniment',
      'Exclusive after-hours access to UNESCO monuments',
      'Scenic floatplane flight from Kandy to Colombo',
      'Full-board dining including chef tasting menus and private cellar wines'
    ],
    exclusivePrivileges: [
      'Temple of the Tooth Inner Chamber Blessing',
      'Pre-public dawn access to Sigiriya summit',
      'Private Ves master drummer interactive salon'
    ]
  },
  {
    id: 'highland-mist',
    title: 'Highland Mist & The Blue Train Legacy',
    subtitle: 'Century-Old Tea Terraces, Vintage Rail & The Nine Arches Viaduct',
    durationDays: 7,
    pace: 'Gentle & Unhurried',
    groupSize: 'Private Bespoke (2–4 Guests)',
    basePriceUSD: 4900,
    heroImage: '/images/ella_train.jpg',
    galleryImages: [
      '/images/ella_train.jpg',
      '/images/kitulgala_rafting.jpg'
    ],
    tags: ['Scenic Train', 'Single-Origin Tea', 'Colonial Estates'],
    rarityBadge: 'Connoisseur Favorite',
    summary: 'A poetic sojourn through the rolling, cool mist of Sri Lanka’s golden tea valleys. Ride the world-famous blue train, stay in restored 1880s colonial planters’ bungalows, and witness sunrise above the Nine Arches stone viaduct.',
    editorialQuote: '“Here, time slows to the rhythm of hand-plucked two leaves and a bud, enveloped in morning clouds that smell of cedarwood and fresh silver tips.”',
    dayPlan: [
      {
        day: 1,
        title: 'From Coast to Hatton’s Castlereagh Lake',
        location: 'Tea Country / Hatton',
        activities: [
          'Arrival at Hatton via scenic seaplane splashing down directly on Castlereagh Lake',
          'Check-in to Ceylon Tea Trails historic bungalow with personal butler',
          'Traditional English afternoon high tea served in the manicured rose gardens'
        ]
      },
      {
        day: 2,
        title: 'Master Tea Maker’s Private Tasting',
        location: 'Norwood Estate',
        activities: [
          'Walking the emerald tea fields with a resident planter',
          'Private factory tour following orthodox artisanal processing methods',
          'Professional cupping session comparing Nuwara Eliya, Dimbula, and Uva terroirs',
          'Four-course tea-infused dinner paired with fine wines'
        ]
      },
      {
        day: 3,
        title: 'The Legendary Blue Train Ride to Ella',
        location: 'Vintage Railway / Ella',
        activities: [
          'Board the reserved first-class observation carriage of the iconic blue train',
          'Spectacular pass through mountain gorges, cascading waterfalls, and cloud tunnels',
          'Arrival at luxury chalet overlooking Ella Gap'
        ]
      },
      {
        day: 4,
        title: 'Nine Arches Viaduct & Little Adam’s Peak',
        location: 'Ella',
        activities: [
          'Private sunrise shoot at the Nine Arches Bridge as morning steam rises',
          'Gentle trek up Little Adam’s Peak with 360-degree mountain vistas',
          'Afternoon dip in infinity pool suspended above the mountain chasm'
        ]
      },
      {
        day: 5,
        title: 'Nuwara Eliya: "Little England" & Hakgala Flora',
        location: 'Nuwara Eliya (1,868m)',
        activities: [
          'Visit to the Hill Club and historic colonial post office',
          'Private garden tour through ancient Himalayan cedars and English roses',
          'Log fireside dinner with single-malt whiskies'
        ]
      },
      {
        day: 6,
        title: 'Horton Plains & World’s End Sheer Precipice',
        location: 'Horton Plains National Park',
        activities: [
          'Early dawn safari on the high-altitude plateau amidst endemic sambar deer',
          'Gaze over the 880-meter vertical drop of World’s End into the southern plains',
          'Baker’s Falls forest picnic'
        ]
      },
      {
        day: 7,
        title: 'Helicopter Transfer to Colombo / Departure',
        location: 'Colombo',
        activities: [
          'Panoramic helicopter flight over waterfalls and coastline to Colombo',
          'Depart with bespoke gift box of handcrafted Ceylon Silver Needle tea'
        ]
      }
    ],
    inclusions: [
      'Relais & Châteaux Ceylon Tea Trails bungalows with all-inclusive butler service',
      'Private reserved carriage on the historic Hill Country rail line',
      'Private helicopter transfers between tea estates and coastal airport',
      'Exclusive single-estate tea masterclasses and library reserve tastings'
    ],
    exclusivePrivileges: [
      'Private vintage rail observation car',
      'Direct lakeside seaplane landing',
      'Planter’s personal reserve tasting'
    ]
  },
  {
    id: 'wild-ocean-safari',
    title: 'Wild Leopard Trails, Whales & Southern Forts',
    subtitle: 'Yala Apex Predators, Deep Blue Whales & Dutch Galle Bastions',
    durationDays: 10,
    pace: 'Active Exploration',
    groupSize: 'Private Bespoke (2–6 Guests)',
    basePriceUSD: 6800,
    heroImage: '/images/galle_lighthouse.jpg',
    galleryImages: [
      '/images/galle_lighthouse.jpg',
      '/images/mirissa_whale.jpg',
      '/images/stilt_fishermen.jpg'
    ],
    tags: ['Leopard Safari', 'Blue Whales', 'Ocean Bastions'],
    rarityBadge: 'Most Popular',
    summary: 'An expedition bridging the untamed savannah dunes of Yala National Park—home to the planet’s dense leopard population—with the turquoise Indian Ocean where blue whales breach, finishing inside Galle’s historic 17th-century ramparts.',
    editorialQuote: '“Few places on Earth allow you to track an apex leopard at sunrise and sip champagne watching a blue whale breach at sunset.”',
    dayPlan: [
      {
        day: 1,
        title: 'Touchdown & Coastal Transfer to Yala Sanctuary',
        location: 'Yala Coastline',
        activities: [
          'Arrival and direct luxury chauffeur to luxury cocoon safari lodge',
          'Sundowner cocktails on wild sand dunes overlooking the Indian Ocean',
          'Gourmet lantern-lit dinner under ancient banyan trees'
        ]
      },
      {
        day: 2,
        title: 'Dawn Leopard Tracking with Leading Naturalist',
        location: 'Yala National Park Block 1',
        activities: [
          'Exclusive custom open-top 4x4 safari cruiser with heated seats and telephoto mounts',
          'Track the elusive Sri Lankan Leopard (*Panthera pardus kotiya*) through dry thorn jungle',
          'Midday bush picnic beside lotus water reservoirs'
        ]
      },
      {
        day: 3,
        title: 'Sloth Bears, Crocodiles & Deep Forest Rites',
        location: 'Yala Block 5 / Lunugamvehera',
        activities: [
          'Explore pristine uncrowded northern sectors with expert trackers',
          'Encounter herds of Asian elephants swimming at sunset',
          'Campfire storytelling with wildlife conservation director'
        ]
      },
      {
        day: 4,
        title: 'Coastal Transfer to Weligama Clifftops',
        location: 'Weligama & Mirissa',
        activities: [
          'Scenic drive along the sapphire southern bay passing stilt fishermen',
          'Check-in to Cape Weligama perched 40 meters above the surf',
          'Private clifftop crescent infinity pool and sunset spritz'
        ]
      },
      {
        day: 5,
        title: 'Chartered Catamaran Blue Whale Expedition',
        location: 'Mirissa Deep Pelagic Waters',
        activities: [
          'Private 50ft sailing yacht chartered exclusively with marine biologist',
          'Witness majestic blue whales, sperm whales, and spinning dolphin pods',
          'Champagne breakfast on deck as ocean spray glistens in the morning sun'
        ]
      },
      {
        day: 6,
        title: 'Galle Fort UNESCO Bastions & Colonial Architecture',
        location: 'Galle Fort',
        activities: [
          'Check-in to historic Amangalla in the heart of the Dutch Fort',
          'Guided architectural walk through 400-year-old cobblestone alleyways',
          'Private visit to heritage sapphire cuttery and museum vault'
        ]
      },
      {
        day: 7,
        title: 'Cinnamon Island Catamaran & Lagoon Ecology',
        location: 'Koggala Lake',
        activities: [
          'Private boat expedition across serene Koggala lake to traditional cinnamon peelers',
          'Aromatic lunch cooked on clay hearth with fresh spices and coconut milk',
          'Evening gin and tonic on the Galle Fort lighthouse ramparts'
        ]
      },
      {
        day: 8,
        title: 'Ayurvedic Wellness & Coastal Relaxation',
        location: 'Thalpe & Unawatuna',
        activities: [
          'Custom herbal rejuvenation therapy supervised by Ayurvedic doctor',
          'Private secluded cove swim and beachfront massage',
          'Seafood barbecue with jumbo prawns and Sri Lankan arrack cocktails'
        ]
      },
      {
        day: 9,
        title: 'Geoffrey Bawa Architecture & Lunuganga Estate',
        location: 'Bentota',
        activities: [
          'Visit to the legendary tropical modernist estate of architect Geoffrey Bawa',
          'Lunch on the cinnamon hill overlooking Dedduwa lake',
          'Return to Colombo for gala farewell banquet'
        ]
      },
      {
        day: 10,
        title: 'Departure with Lasting Memories',
        location: 'Colombo',
        activities: [
          'Private breakfast overlooking the Indian Ocean',
          'VIP departure transfer to international flight'
        ]
      }
    ],
    inclusions: [
      'Wild Coast Tented Lodge & Amangalla ultra-luxury suite stays',
      'Private custom safari cruisers with senior naturalists',
      'Exclusively chartered private catamaran for whale tracking',
      'All park entrance permits, champagne breakfasts, and dinners'
    ],
    exclusivePrivileges: [
      'Private 50-ft whale watching yacht',
      'Amangalla heritage historic suite',
      'Senior wildlife biologist host'
    ]
  },
  {
    id: 'rainforest-adventure',
    title: 'Emerald Adrenaline & Sacred Rainforest Peaks',
    subtitle: 'Kitulgala Whitewater Rapids, Kelani Canyons & Adam’s Peak Dawn',
    durationDays: 6,
    pace: 'Active Exploration',
    groupSize: 'Private Expedition (2–6 Adventurers)',
    basePriceUSD: 3950,
    heroImage: '/images/kitulgala_rafting.jpg',
    galleryImages: [
      '/images/kitulgala_rafting.jpg',
      '/images/yala_leopard.jpg',
      '/images/sigiriya.jpg'
    ],
    tags: ['Whitewater Rafting', 'Rainforest Trekking', 'Sacred Sunrise Peak'],
    rarityBadge: 'Adrenaline Elite',
    summary: 'Designed for the spirited traveler seeking thrilling untamed nature. Brave churning class IV whitewater rapids down the Kelani River, leap into hidden granite canyon pools, and ascend Adam’s Peak through nighttime lantern trails for the sacred triangular shadow sunrise.',
    editorialQuote: '“Water droplets freezing in the morning sun as you crash through churning rapids, surrounded only by primeval rainforest canopy.”',
    dayPlan: [
      {
        day: 1,
        title: 'Arrival into Rainforest Solitude',
        location: 'Kitulgala Rainforest',
        activities: [
          'Chauffeured transit into the lush Kelani river valley',
          'Private rainforest retreat check-in overlooking foaming rapids',
          'Sunset canopy walk listening to endemic birds and cicadas'
        ]
      },
      {
        day: 2,
        title: 'Whitewater Rafting Expedition & Canyon Jumps',
        location: 'Kelani River Rapids',
        activities: [
          'Full-day whitewater rafting through famous Grade III & IV rapids',
          'Confidence jumps from granite cliffs into crystal-clear deep river pools',
          'Natural rock sliding and gourmet forest riverbank barbecue'
        ]
      },
      {
        day: 3,
        title: 'Prehistoric Caves & Belilena Archaeology',
        location: 'Belilena Caves',
        activities: [
          'Trek to the 30,000-year-old habitat of the prehistoric Balangoda Man',
          'Hidden jungle waterfall abseiling with mountaineering guides',
          'Evening Ayurvedic muscle relief herbal bath'
        ]
      },
      {
        day: 4,
        title: 'Ascent to Nallathanniya Base & Night Pilgrimage',
        location: 'Sri Pada (Adam’s Peak)',
        activities: [
          'Scenic drive into the cloud forest foothills of Sri Pada',
          'Rest at mountain base camp before midnight departure',
          'Midnight torchlit ascent along illuminated stairway with pilgrims'
        ]
      },
      {
        day: 5,
        title: 'The Sacred Triangular Shadow at Dawn',
        location: 'Adam’s Peak Summit (2,243m)',
        activities: [
          'Witness sunrise casting the mystical perfect pyramid shadow across the cloud bed',
          'Hear the bronze bell tolled by pilgrims at the Sacred Footprint temple',
          'Scenic descent and recovery breakfast at tea estate lodge'
        ]
      },
      {
        day: 6,
        title: 'Scenic Return & Departure',
        location: 'Colombo',
        activities: [
          'Chauffeured journey to Colombo international departures terminal'
        ]
      }
    ],
    inclusions: [
      'Boutique riverside eco-luxury chalets and mountain lodges',
      'All expedition whitewater rafting gear, safety boats & certified instructors',
      'Mountaineering guides for Adam’s Peak and canyoning',
      'Full meals and hydration support packs'
    ],
    exclusivePrivileges: [
      'Private expedition river craft',
      'Elite mountaineering guides',
      'Prehistoric cave scholar access'
    ]
  }
];
