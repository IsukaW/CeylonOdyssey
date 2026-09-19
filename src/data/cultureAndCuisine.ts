import type { CulinaryHighlight, TeaTerroir, CulturalTradition } from '../types';

export const CULINARY_FEAST: CulinaryHighlight[] = [
  {
    id: 'banana-leaf-feast',
    name: 'Royal Rice & Curry on Fresh Banana Leaf',
    sinhalaName: 'කෙසෙල් කොළේ බත්',
    tagline: 'The Quintessential Sri Lankan Gastronomic Ritual',
    description: 'An expansive array of slow-simmered earthen clay pot curries served upon a glistening emerald banana leaf warmed over charcoal. Features heirloom red samba rice, coconut sambols, spiced jackfruit, and golden dhal with tempered mustard seeds.',
    keyIngredients: ['Red Raw Rice', 'Cold-Pressed Coconut Milk', 'Ceylon Cinnamon', 'Curry Leaves', 'Pandanus', 'Clay Pots'],
    flavorProfile: ['Earthy', 'Coconut Creamy', 'Aromatic Spice', 'Subtle Smoke'],
    pairing: 'King Coconut Water or Single-Estate Dimbula Broken Orange Pekoe',
    image: '/images/culinary_feast.jpg'
  },
  {
    id: 'black-pork-curry',
    name: 'Village Roasted Black Pepper Pork',
    sinhalaName: 'කළු ඌරු මස් ව්‍යංජනය',
    tagline: 'Smoked Goraka, Roasted Spices & Crushed Black Peppercorns',
    description: 'Tender pork belly braised for hours with dark-roasted coriander, cumin, fennel, and sun-dried Garcinia cambogia (Goraka). The spice paste caramelizes into an obsidian glaze of extraordinary complexity and depth.',
    keyIngredients: ['Ceylon Black Pepper', 'Goraka (Gamboge)', 'Dark Roasted Curry Powder', 'Garlic', 'Green Chilies'],
    flavorProfile: ['Rich & Peppery', 'Tart Citrus Tang', 'Deep Smoky Umami'],
    pairing: 'Chilled Lion Lager or Aged Arrack Old Fashioned',
    image: '/images/culinary_feast.jpg'
  },
  {
    id: 'polos-curry',
    name: 'Young Jackfruit Amber Curry (Polos)',
    sinhalaName: 'පොලොස් ඇඹුල',
    tagline: 'The Ancient Forest Delicacy with Meat-like Texture',
    description: 'Baby jackfruit cut and slow-stewed overnight over low woodfire embers until the fibrous core melts like slow-cooked brisket, infused with rich toasted coconut cream and aromatic island cardamom.',
    keyIngredients: ['Tender Young Jackfruit', 'Thick Coconut Milk', 'Mustard Seed Paste', 'Rampe', 'Cinnamon Quills'],
    flavorProfile: ['Tender & Fibrous', 'Velvety Coconut Gravy', 'Warm Spices'],
    pairing: 'Heirloom Kalu Heenati Red Rice & Fresh Gotukola Sambol',
    image: '/images/culinary_feast.jpg'
  },
  {
    id: 'egg-hoppers',
    name: 'Crispy Lace Edge Egg Hoppers (Appa)',
    sinhalaName: 'බිත්තර ආප්ප',
    tagline: 'Fermented Coconut Toddy Batter with a Golden Molten Egg Yolk',
    description: 'Swirled in spherical mini woks called *thachchi*, these bowl-shaped pancakes have paper-thin lacy edges that shatter with a crunch, holding a soft spongy coconut center cradling a farm-fresh golden egg.',
    keyIngredients: ['Fermented Rice Flour', 'Coconut Toddy', 'Coconut Milk', 'Farm Egg', 'Coarse Black Pepper'],
    flavorProfile: ['Crispy & Airy', 'Creamy Egg Center', 'Subtle Yeast Ferment'],
    pairing: 'Fiery Katta Sambol (Crushed chili, lime & Maldive fish) or Seeni Sambol (Caramelized sweet onions)',
    image: '/images/culinary_feast.jpg'
  }
];

export const TEA_TERROIRS: TeaTerroir[] = [
  {
    id: 'nuwara-eliya',
    region: 'Nuwara Eliya Plateau',
    elevationMeters: '1,868 m – 2,200 m (6,128 – 7,200 ft)',
    character: 'The Champagne of Ceylon Teas',
    flavorNotes: ['Floral Jasmine', 'Delicate Citrus Peach', 'Ethereal Crispness', 'Pale Golden Liquor'],
    prominentEstates: ['Pedro Estate', 'Lovers Leap', 'Mackwoods Labookellie'],
    liquorColor: '#F9E298',
    bestPluckingSeason: 'January – March (Cold nights & dry sun)'
  },
  {
    id: 'dimbula',
    region: 'Dimbula Valley & Hatton',
    elevationMeters: '1,050 m – 1,650 m (3,500 – 5,500 ft)',
    character: 'Refined Full-Bodied Balance',
    flavorNotes: ['Wild Honey', 'Oak & Cypress', 'Mellow Tannins', 'Bright Amber Liquor'],
    prominentEstates: ['Norwood Estate', 'Castlereagh', 'Summerville'],
    liquorColor: '#EAA23C',
    bestPluckingSeason: 'February – April (Southwest monsoon wind dry break)'
  },
  {
    id: 'uva',
    region: 'Uva Mountain Slopes',
    elevationMeters: '900 m – 1,500 m (3,000 – 5,000 ft)',
    character: 'Exotic Winter Flush Menthol Pungency',
    flavorNotes: ['Wintergreen Menthol', 'Calamansi Zest', 'Pungent Dry Finish', 'Reddish Copper Liquor'],
    prominentEstates: ['Demodera Estate', 'Aislaby', 'Shawlands'],
    liquorColor: '#CF6124',
    bestPluckingSeason: 'July – September (Kachchan dry winds)'
  },
  {
    id: 'ruhuna',
    region: 'Ruhuna Low-Country Canopies',
    elevationMeters: 'Sea level to 600 m (0 – 2,000 ft)',
    character: 'Intense, Molasses Rich & Bold',
    flavorNotes: ['Molasses & Malt', 'Dark Chocolate', 'Sweet Caramel', 'Deep Ruby Liquor'],
    prominentEstates: ['Lumbini Tea Valley', 'Ceciliyan Estate'],
    liquorColor: '#802812',
    bestPluckingSeason: 'Year-Round (Humid equatorial sunshine)'
  }
];

export const CULTURAL_TRADITIONS: CulturalTradition[] = [
  {
    id: 'ves-dance',
    title: 'The Sacred Ves Dance & Udarata Drummers',
    nativeTitle: 'වෙස් නැටුම සහ ගැට බෙරය',
    era: 'Kandyan Kingdom (3rd Century BCE origins codified 16th Century)',
    summary: 'The pinnacle of classical Kandyan dance art. The Ves dancer wears 64 sacred ornaments including the metallic Otunna headdress, breastplate, and ankle bells, executing airborne pirouettes to summon celestial blessings and banish malevolence.',
    image: '/images/kandyan_dancers.jpg',
    ritualSignificance: 'Originally performed strictly within the Kohomba Kankariya royal purification ritual to cure King Panduvasdeva. Dancers undergo a sacred Ves Bandhima initiation ceremony before donning the headgear.',
    elements: [
      'Geta Beraya: Asymmetrical double-ended hollowed wood drum with cow & monkey hide',
      'Otunna: Radiating silver crown symbolizing divine solar halos',
      'Avul-Hera: Filigreed chest armor adorned with sacred beads',
      'Pai-poth: Brass ankle bells chiming in polyrhythmic cadence'
    ]
  },
  {
    id: 'sandakada-pahana',
    title: 'The Moonstone (Sandakada Pahana)',
    nativeTitle: 'සඳකඩ පහණ',
    era: 'Anuradhapura & Polonnaruwa Periods (5th – 12th Century)',
    summary: 'A semi-circular sculpted granite stepping stone placed at the foot of royal temples. Concentric stone carvings depict the cycle of Samsara—outer flames (desire), 4 animals (birth, decay, disease, death), creeper vine (entanglements), and swans (wisdom) entering the pure lotus sanctuary.',
    image: '/images/dambulla.jpg',
    ritualSignificance: 'Worshippers leave behind worldly illusions and desires as they step across the Moonstone onto the threshold of Buddhist enlightenment.',
    elements: [
      'Concentric Animal Frieze: Elephant, Lion, Horse, and Bull',
      'Hansa (Swans): Sacred birds believed to filter milk from water (discernment)',
      'Liyawel: Elegant foliate scroll symbolizing worldly attachment',
      'Central Nelum Mal: The open lotus flower of supreme transcendence'
    ]
  },
  {
    id: 'vesak-festival',
    title: 'Vesak Lantern Illuminations (Vesak Kudu)',
    nativeTitle: 'වෙසක් පහන් කූඩු',
    era: 'Full Moon Poya of May (Centuries-old festival of light)',
    summary: 'During the full moon of Vesak, every city and lakeside village transforms into an ethereal wonderland of hand-crafted bamboo and tissue-paper octagonal lanterns glowing with candlelight, celebrating the Buddha’s birth, enlightenment, and parinirvana.',
    image: '/images/vesak_lanterns.jpg',
    ritualSignificance: 'The soft radiant light piercing the darkness symbolizes spiritual illumination dispelling ignorance and the impermanence of beauty.',
    elements: [
      'Atapattama: Traditional eight-sided geometric bamboo frame with trailing paper tails',
      'Dansalas: Community free food and drink banquets offered to all passersby',
      'Toran: Electrified giant pandals depicting Jataka folk chronicles with thousands of pulsing bulbs',
      'Clay Pahan: Earthen coconut oil lamps floating on sacred waters and temple ledges'
    ]
  }
];
