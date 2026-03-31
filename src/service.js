/* ═══════════════════════════════════════════════════
   serviceData.js — Full content from all 12 PDFs
   Used by ServiceDetailPage.jsx
═══════════════════════════════════════════════════ */
import icon1  from "./Assets/rat.jpg";
import icon2  from "./Assets/cockroach.png";
import icon3  from "./Assets/bedbug.jpg";
import icon4  from "./Assets/mosquito.jpg";
import icon5  from "./Assets/housefly.jpg";
import icon6  from "./Assets/termit.png";
import icon7  from "./Assets/wood.jpg";
import icon8  from "./Assets/honeybee.jpg";
import icon9  from "./Assets/snake.jpg";
import icon10 from "./Assets/deepcleaning.jpg";
import icon11 from "./Assets/distincfection.jpg";
import icon12 from "./Assets/terminate.jpg";

export const SERVICE_DATA = {
  "rodent-control": {
    heroImg: icon1,
    slug: "rodent-control",
    title: "Rodent Control Services",
    icon: "🐭",
    tagline: "Complete elimination of rats & mice using safe, proven methods",
    heroColor: "#1a2f50",
    intro: "Rodent infestations are one of the most common and challenging pest problems faced by homeowners and businesses. Whether rats in a warehouse, mice in a kitchen, or rodents nesting in false ceilings — their presence leads to serious health risks, structural damage, and contamination. OnGuard Pest Controls eliminates infestations effectively through a strategic, scientific approach.",
    whyImportant: [
      { title: "Health Hazards", desc: "Rodents carry diseases like Leptospirosis, Salmonella, and Hantavirus, spread through urine, droppings, saliva, and contaminated food." },
      { title: "Property Damage", desc: "Rodents gnaw on electrical wires (fire hazard), wooden structures, plastic pipes — causing costly structural damage." },
      { title: "Food Contamination", desc: "In homes and commercial kitchens, rodents contaminate food supplies, leading to health risks and financial losses." },
      { title: "Reputation Damage", desc: "For restaurants, hotels, and offices, a rodent sighting can severely damage reputation and customer trust." },
    ],
    signs: ["Droppings near food storage areas", "Gnaw marks on furniture, wires, or packaging", "Scratching noises in ceilings or walls", "Nests made of paper, fabric, or insulation", "Grease marks along walls and entry points"],
    methods: [
      { name: "Baiting System", desc: "Rodenticide baits placed in secure bait stations to attract and eliminate rodents safely — designed to prevent access by children and pets." },
      { name: "Trapping Methods", desc: "Snap traps, glue boards for monitoring, and live traps depending on the situation and severity." },
      { name: "Proofing & Exclusion", desc: "Sealing holes and cracks, installing mesh on vents and drains, blocking entry points around pipes and cables to prevent re-entry." },
      { name: "Advanced Monitoring", desc: "Rodent monitoring devices, scheduled inspections, and digital tracking systems for commercial and industrial clients." },
      { name: "Sanitation Guidance", desc: "Clients advised on proper waste management, safe food storage, and eliminating clutter to reduce rodent attraction." },
    ],
    sectors: ["Residential homes & apartments", "Restaurants, hotels & offices", "Factories & warehouses", "Hospitals, schools & institutions"],
    preventiveTips: ["Keep surroundings clean", "Store food in airtight containers", "Dispose of garbage regularly", "Seal cracks and gaps in walls", "Avoid clutter"],
  },

  "cockroach-control": {
    heroImg: icon2,
    slug: "cockroach-control",
    title: "Cockroach Control Services",
    icon: "🪳",
    tagline: "Odorless, eco-friendly cockroach elimination for homes & offices",
    heroColor: "#1a2f18",
    intro: "Cockroaches are among the most resilient and troublesome pests found in homes, offices, restaurants, and industrial facilities. Their ability to survive harsh conditions, reproduce rapidly, and spread harmful pathogens makes them a major health concern. In Kerala, where humidity is high, cockroach infestations are particularly common. OnGuard offers specialized control services with scientifically proven methods.",
    whyImportant: [
      { title: "Health Risks", desc: "Cockroaches carry bacteria spreading food poisoning, gastroenteritis, and triggering allergies and asthma. They contaminate food and surfaces from drains and waste areas." },
      { title: "Rapid Infestation", desc: "A small problem can turn into a full-blown infestation within weeks if not addressed promptly." },
      { title: "Unhygienic Environment", desc: "Their presence creates an unsanitary environment, especially in kitchens and food preparation areas." },
      { title: "Business Impact", desc: "For restaurants, hotels, and food industries: failed health inspections, loss of customers, and damage to brand reputation." },
    ],
    signs: ["Live cockroaches sighted (especially at night)", "Droppings resembling black pepper or coffee grounds", "Unpleasant, musty odor", "Egg cases (oothecae) in hidden areas", "Smear marks on walls and surfaces"],
    methods: [
      { name: "Gel Bait Treatment", desc: "Applied in cracks and hiding spots — cockroaches consume bait and carry it back to nests, eliminating the entire colony. Odourless, no need to vacate premises." },
      { name: "Spray Treatment", desc: "Immediate knockdown for severe infestations and open areas, covering large areas and targeting visible and hidden cockroaches." },
      { name: "Dust Treatment", desc: "Insecticidal dust applied in electrical outlets, wall voids, and hard-to-reach areas for long-lasting control in hidden spaces." },
      { name: "Trap Monitoring", desc: "Sticky traps used to monitor cockroach activity, identify infestation levels, and evaluate treatment effectiveness." },
      { name: "Drain Treatment", desc: "Specialized drain cleaning treatments and anti-cockroach solutions for pipelines, targeting breeding sites." },
    ],
    sectors: ["Residential homes & apartments", "Offices & retail spaces", "Restaurants & food industry", "Factories & warehouses"],
    preventiveTips: ["Keep kitchens clean", "Store food in sealed containers", "Fix leaks and reduce moisture", "Dispose of garbage regularly", "Seal cracks and crevices"],
  },

  "bed-bug-control": {
    heroImg: icon3,
    slug: "bed-bug-control",
    title: "Bed Bug Control Services",
    icon: "🛏️",
    tagline: "Advanced heat & chemical treatment for complete bed bug eradication",
    heroColor: "#2a1a3f",
    intro: "Bed bugs are among the most frustrating and persistent pests that invade homes, hotels, hostels, and commercial spaces. Their ability to hide in tiny cracks, reproduce rapidly, and feed on human blood makes them extremely difficult to eliminate. OnGuard Pest Controls offers specialized services to completely eradicate infestations and restore comfort, hygiene, and peace of mind.",
    whyImportant: [
      { title: "Health & Skin Reactions", desc: "Bed bug bites cause itching, irritation, red swollen marks, and allergic reactions in some individuals." },
      { title: "Sleep Disturbance", desc: "Bed bugs feed at night, causing insomnia, anxiety, stress, and reduced quality of life." },
      { title: "Rapid Infestation Growth", desc: "A small infestation quickly becomes severe due to their fast reproduction rate." },
      { title: "Business Impact", desc: "In hotels and rental properties, infestations can damage reputation, lead to negative reviews, and result in financial losses." },
    ],
    signs: ["Small blood stains on bedsheets", "Dark spots (fecal matter) on mattresses and walls", "Shed skins and eggshells", "Musty odor in heavily infested areas", "Bite marks in clusters or lines on the skin"],
    methods: [
      { name: "Chemical Treatment", desc: "Specialized insecticides applied to mattresses, furniture, and cracks — killing bed bugs instantly and providing residual protection." },
      { name: "Heat Treatment", desc: "Raising temperature of infested areas to lethal levels. Chemical-free, kills all life stages, highly effective for severe infestations." },
      { name: "Steam Treatment", desc: "High-temperature steam applied to mattresses, upholstery, and curtains to kill bed bugs hidden deep within fabrics." },
      { name: "Vacuuming & Cleaning", desc: "Pre-treatment preparation: vacuuming infested areas, removing visible bugs and eggs, reducing infestation load." },
      { name: "Crack & Crevice Treatment", desc: "Special attention to wall joints, furniture gaps, and electrical outlets — common hiding spots." },
    ],
    sectors: ["Residential homes & apartments", "Hotels & hospitality", "Hostels & PG accommodations", "Offices & commercial spaces"],
    preventiveTips: ["Inspect hotel rooms while traveling", "Avoid used furniture without checking", "Wash clothes after travel", "Regularly clean and inspect sleeping areas"],
  },

  "mosquito-control": {
    heroImg: icon4,
    slug: "mosquito-control",
    title: "Mosquito Control Services",
    icon: "🦟",
    tagline: "Fogging & larval treatment to prevent mosquito breeding across Kerala",
    heroColor: "#0d2918",
    intro: "Mosquitoes are among the most dangerous disease carriers in the world. In tropical regions like Kerala, where humidity and rainfall create ideal breeding conditions, mosquito infestations are a constant concern. OnGuard Pest Controls offers professional services to reduce mosquito populations, prevent breeding, and protect families and communities from harmful diseases including dengue, malaria, chikungunya, and Zika.",
    whyImportant: [
      { title: "Disease Prevention", desc: "Mosquitoes are vectors of dengue fever, malaria, chikungunya, and Zika virus. Effective control significantly reduces risk." },
      { title: "Improved Quality of Life", desc: "Mosquito bites cause itching, allergic reactions, and disturbed sleep affecting daily wellbeing." },
      { title: "Public Health Safety", desc: "Controlling mosquito populations protects entire communities and reduces burden on healthcare systems." },
      { title: "Business Impact", desc: "For hotels, resorts, and outdoor businesses, mosquito infestations negatively impact customer experience and reputation." },
    ],
    signs: ["Frequent mosquito bites indoors or outdoors", "Presence of stagnant water around the property", "Mosquito larvae (wrigglers) in water", "Increased mosquito activity during dawn and dusk"],
    methods: [
      { name: "Fogging Treatment", desc: "Thermal fogging and ULV (Ultra Low Volume) fogging for immediate reduction of adult mosquitoes across large outdoor areas." },
      { name: "Larvicidal Treatment", desc: "Targets mosquito larvae in stagnant water, drains, ponds and tanks — prevents mosquitoes from reaching adulthood." },
      { name: "Residual Spray", desc: "Insecticides applied to walls, vegetation, and dark corners where mosquitoes rest, providing ongoing protection." },
      { name: "Source Reduction", desc: "Eliminating breeding sites — removing stagnant water, cleaning drains and gutters, covering water storage containers." },
      { name: "Repellent Treatments", desc: "Special treatments applied to outdoor areas to repel mosquitoes from gardens and open spaces." },
    ],
    sectors: ["Residential homes & apartments", "Hotels, resorts & outdoor businesses", "Factories, schools & hospitals", "Offices & commercial spaces"],
    preventiveTips: ["Avoid stagnant water around property", "Clean surroundings regularly", "Use mosquito nets and screens", "Maintain drainage systems", "Trim vegetation near buildings"],
  },

  "housefly-control": {
    heroImg: icon5,
    slug: "housefly-control",
    title: "Housefly Control Services",
    icon: "🪰",
    tagline: "Effective fly control solutions for homes & commercial spaces",
    heroColor: "#2a1f00",
    intro: "Houseflies are among the most common and unhygienic pests found in residential, commercial, and industrial environments. Known carriers of Salmonella, E. coli, and cholera-causing bacteria, houseflies transfer pathogens from waste to food and surfaces. A single pair of flies can multiply into thousands within a short time. OnGuard Pest Controls offers professional control services to eliminate infestations and maintain long-term cleanliness.",
    whyImportant: [
      { title: "Disease Transmission", desc: "Houseflies carry Salmonella, E. coli, and cholera-causing bacteria — transferring these pathogens from waste to food and surfaces." },
      { title: "Food Contamination", desc: "Flies contaminate food by landing on it after contact with waste, regurgitating digestive fluids, and leaving behind fecal matter." },
      { title: "Hygiene Issues", desc: "Their presence indicates poor sanitation and leads to unhealthy living conditions." },
      { title: "Business Impact", desc: "For restaurants, hotels, and food industries: customer complaints, regulatory violations, and damage to brand reputation." },
    ],
    signs: ["Frequent fly sightings indoors", "Presence of maggots (larvae) in waste areas", "Fly buzzing sounds", "Dark spots (fly droppings) on walls and surfaces"],
    methods: [
      { name: "Residual Spray Treatment", desc: "Insecticides applied to walls, ceilings, and garbage areas where flies rest — providing long-lasting reduction in fly population." },
      { name: "Fly Baiting", desc: "Special baits used to attract and kill flies with targeted approach and quick results." },
      { name: "UV Fly Catcher Machines", desc: "Electronic devices installed in strategic locations — attract flies using UV light, trap using glue boards or electric grids. Ideal for restaurants and food units." },
      { name: "Larvicidal Treatment", desc: "Targets fly larvae in garbage bins, drains, and organic waste areas — preventing future generations of flies." },
      { name: "Sanitation & Waste Management", desc: "Proper waste disposal, cleaning of drains and bins, eliminating organic buildup as a key part of fly control." },
    ],
    sectors: ["Residential homes & apartments", "Offices & retail spaces", "Restaurants & food industry", "Factories & warehouses"],
    preventiveTips: ["Dispose of waste regularly", "Keep garbage bins covered", "Clean food spills immediately", "Maintain proper drainage", "Install window screens"],
  },

  "termite-control": {
    heroImg: icon6,
    slug: "termite-control",
    title: "Termite Control Services",
    icon: "🐜",
    tagline: "Long-lasting anti-termite protection for buildings & furniture",
    heroColor: "#3f1a00",
    intro: "Termites are among the most destructive pests affecting homes, commercial buildings, and industrial structures. Often called 'silent destroyers,' termites cause extensive structural damage without immediate visible signs. By the time an infestation is detected, significant harm may already be done. In Kerala, subterranean termites are the most common due to high humidity and soil conditions. OnGuard offers advanced detection, elimination, and long-term protection.",
    whyImportant: [
      { title: "Structural Damage", desc: "Termites feed on doors, windows, furniture, wooden beams and flooring — weakening the structural integrity of buildings over time." },
      { title: "Financial Loss", desc: "Repairing termite damage can be extremely expensive, especially if the infestation goes unnoticed for long." },
      { title: "Hidden Infestation", desc: "Termites remain hidden inside walls, floors, and furniture, making early detection extremely difficult." },
      { title: "Property Value Impact", desc: "Termite damage can significantly reduce the market value of a property." },
    ],
    signs: ["Mud tubes on walls or foundations", "Hollow-sounding wood", "Discarded wings near windows or doors", "Cracked or bubbling paint", "Presence of termite droppings (frass)"],
    methods: [
      { name: "Pre-Construction Treatment", desc: "Applied during building construction — soil treatment before foundation, chemical barrier under slabs, treatment around pipes. Prevents infestation from the start." },
      { name: "Post-Construction Treatment", desc: "For existing buildings — drilling holes in floors and walls, injecting termiticides into soil, creating a chemical barrier." },
      { name: "Soil Treatment", desc: "Targets subterranean termites in the soil, forming a protective barrier that prevents termite entry with long-lasting effect." },
      { name: "Wood Treatment", desc: "Direct protective chemical application on wood for both preventive and curative treatment of wooden structures." },
      { name: "Baiting Systems", desc: "Modern baiting — termites consume bait, carry it to the colony, and eliminate the entire colony over time." },
    ],
    sectors: ["Residential homes & apartments", "Offices & commercial buildings", "Factories & warehouses", "Schools, hospitals & institutions"],
    preventiveTips: ["Avoid wood-to-soil contact", "Fix leaks and reduce moisture", "Store wood away from buildings", "Conduct regular inspections"],
  },

  "wood-borer-control": {
    heroImg: icon7,
    slug: "wood-borer-control",
    title: "Wood Borer Control Services",
    icon: "🪵",
    tagline: "Specialized treatment to protect wooden furniture from borers",
    heroColor: "#2a1500",
    intro: "Wood borers are one of the most damaging yet often overlooked pests that attack wooden structures, furniture, and fixtures. Unlike termites, wood borers silently destroy wood from the inside — making early detection extremely difficult. By the time visible signs appear, damage is often extensive. OnGuard provides professional wood borer control services to eliminate infestations, restore integrity of wooden items, and prevent future damage.",
    whyImportant: [
      { title: "Structural Damage", desc: "Wood borers hollow out furniture, wooden beams, doors and frames from the inside, compromising their strength." },
      { title: "Expensive Repairs", desc: "Replacing damaged wood can be costly, especially if the infestation spreads to multiple items." },
      { title: "Spread of Infestation", desc: "If not treated, wood borers can spread to other wooden items throughout the property." },
      { title: "Aesthetic Damage", desc: "Visible holes and powder residue can ruin the appearance of furniture and interiors." },
    ],
    signs: ["Tiny round exit holes in wood", "Fine powder (sawdust-like frass) near wooden items", "Weak or brittle wood", "Presence of beetles near wooden surfaces"],
    methods: [
      { name: "Injection Treatment", desc: "Specialized insecticides injected directly into exit holes and infested wooden areas — targeting larvae hidden deep inside wood." },
      { name: "Surface Spray Treatment", desc: "Chemical solutions applied to wooden surfaces to kill active insects and prevent further infestation." },
      { name: "Wood Preservation Treatment", desc: "Protective chemicals applied to strengthen wood and prevent future attacks." },
      { name: "Fumigation", desc: "For heavy infestations — fumigation eliminates all life stages and penetrates deep into wood." },
    ],
    sectors: ["Residential homes & furniture", "Offices & showrooms", "Factories & warehouses", "Antique & heritage protection"],
    preventiveTips: ["Use treated wood for new installations", "Apply protective coatings", "Keep wooden items dry", "Avoid moisture buildup", "Inspect furniture regularly"],
  },

  "honey-bee-removal": {
    heroImg: icon8,
    slug: "honey-bee-removal",
    title: "Honey Bee Removal Service",
    icon: "🐝",
    tagline: "Safe and eco-friendly relocation of honey bee colonies",
    heroColor: "#2a1f00",
    intro: "Honey bees play a vital role in the ecosystem as pollinators. However, when bee colonies establish hives in residential or commercial spaces, they pose safety risks and inconvenience. Managing such situations requires a careful, humane, and professional approach. OnGuard Pest Controls offers specialized honey bee removal services that prioritize safety, environmental responsibility, and effective relocation of bee colonies wherever possible.",
    whyImportant: [
      { title: "Safety Risks", desc: "Bee stings can cause painful reactions, allergic responses, and severe conditions like anaphylaxis in sensitive individuals." },
      { title: "Structural Concerns", desc: "Hives built inside walls or roofs can weaken structures, cause honey leakage, and attract other pests." },
      { title: "Disturbance & Fear", desc: "Large bee colonies create anxiety and discomfort for residents or employees." },
      { title: "Business Impact", desc: "For hotels and restaurants, bee infestations can affect customer experience, lead to complaints, and impact reputation." },
    ],
    signs: ["Visible bee movement in and out of a specific area", "Buzzing sounds inside walls or ceilings", "Presence of honeycomb structures", "Sweet or sticky substances (honey leakage)"],
    methods: [
      { name: "Live Hive Removal", desc: "Carefully opening the affected area, extracting the hive and bees, and relocating them to a safer environment — eco-friendly and preserving bee population." },
      { name: "Smoke Application", desc: "Smoke used to calm bees, reduce aggression, and facilitate safe removal." },
      { name: "Protective Equipment", desc: "Technicians use bee suits, specialized tools, and safe handling techniques throughout the process." },
      { name: "Structural Access & Repair", desc: "For hives inside walls — controlled access created, hive removed, and area sealed after treatment." },
    ],
    sectors: ["Residential homes & gardens", "Offices & retail spaces", "Hotels & resorts", "Factories, schools & hospitals"],
    preventiveTips: ["Seal gaps and openings in roofs and walls", "Regularly inspect roofs and walls", "Avoid leaving sugary substances exposed", "Maintain outdoor areas"],
  },

  "snake-control": {
    heroImg: icon9,
    slug: "snake-control",
    title: "Snake Control Service",
    icon: "🐍",
    tagline: "Professional snake rescue and relocation services across Kerala",
    heroColor: "#0d2a1a",
    intro: "Snakes are essential to the ecosystem, helping control rodent populations and maintain ecological balance. However, when snakes enter residential areas, commercial properties, or industrial premises, they pose a serious safety concern. In Kerala, where lush greenery, water bodies, and humid conditions provide ideal habitats, snake sightings are relatively common. OnGuard provides professional snake control services focused on safe removal, relocation, and long-term prevention.",
    whyImportant: [
      { title: "Safety Risks", desc: "Snake bites can be life-threatening, especially if the snake is venomous — requiring immediate medical attention." },
      { title: "Fear & Anxiety", desc: "The presence of snakes causes panic and distress among residents and employees." },
      { title: "Risk to Pets & Children", desc: "Children and pets are particularly vulnerable to snake encounters." },
      { title: "Property Concerns", desc: "Snakes hiding in gardens, basements, or storage areas create ongoing safety issues." },
    ],
    signs: ["Shed snake skins", "Snake tracks or trails", "Unusual pet behavior", "Rodent infestation (which attracts snakes)", "Visual sightings in or around the property"],
    methods: [
      { name: "Manual Capture", desc: "Trained experts use snake hooks, snake tongs, and protective gear for safe handling and removal." },
      { name: "Habitat Modification", desc: "Clearing dense vegetation, removing debris and clutter, controlling rodent populations to reduce snake attraction." },
      { name: "Entry Point Sealing", desc: "Sealing gaps and openings prevents snakes from entering buildings in the future." },
      { name: "Emergency Response", desc: "Quick response team available for immediate snake sightings — safe capture and immediate relocation." },
      { name: "Repellent Measures", desc: "Natural and chemical repellents used to deter snakes from the property perimeter." },
    ],
    sectors: ["Residential homes & gardens", "Offices & business spaces", "Factories & warehouses", "Schools, hospitals & public buildings"],
    preventiveTips: ["Keep surroundings clean and clutter-free", "Remove debris and wood piles", "Control rodent populations", "Install proper fencing", "Maintain gardens regularly"],
  },

  "deep-cleaning": {
    heroImg: icon10,
    slug: "deep-cleaning",
    title: "Deep Cleaning Services",
    icon: "🧹",
    tagline: "Complete deep cleaning for homes, offices & commercial areas",
    heroColor: "#003a4a",
    intro: "While routine cleaning helps manage daily dirt, it often fails to eliminate deeply embedded dust, bacteria, allergens, and hidden contaminants. OnGuard Pest Controls offers professional deep cleaning services designed to thoroughly clean, sanitize, and restore hygiene in residential, commercial, and industrial spaces — going beyond regular cleaning to target areas that are often overlooked.",
    whyImportant: [
      { title: "Health & Hygiene", desc: "Deep cleaning removes bacteria and viruses, allergens such as dust mites, and mold and mildew — reducing risk of illnesses and allergies." },
      { title: "Improved Indoor Air Quality", desc: "Dust and pollutants accumulate over time affecting air quality. Deep cleaning improves airflow and freshness." },
      { title: "Pest Prevention", desc: "Clean environments reduce the chances of pest infestations significantly." },
      { title: "Increased Productivity", desc: "In offices, a clean environment boosts employee morale and efficiency." },
    ],
    signs: ["Moving into a new home or office", "After construction or renovation work", "Before or after special events", "Periodic maintenance every 3–6 months", "After pest control treatment"],
    methods: [
      { name: "Home Deep Cleaning", desc: "Kitchen (chimney, cabinets, tiles), bathroom (tiles, fixtures, disinfecting), bedrooms, living areas, floor scrubbing and polishing." },
      { name: "Kitchen Deep Cleaning", desc: "Degreasing surfaces, cleaning all appliances, sanitizing food preparation areas." },
      { name: "Sofa & Carpet Cleaning", desc: "Removal of dust, stains, and allergens through shampooing and vacuuming." },
      { name: "Office Deep Cleaning", desc: "Workstations, furniture, floors, carpets, and sanitization of common areas." },
      { name: "Post-Construction Cleaning", desc: "Removal of dust and debris, cleaning paint marks and residues, polishing surfaces." },
    ],
    sectors: ["Residential homes & apartments", "Offices & retail spaces", "Hotels & restaurants", "Factories & warehouses"],
    preventiveTips: ["Maintain daily cleaning routines", "Avoid clutter", "Clean spills immediately", "Schedule regular deep cleaning every 3–6 months"],
  },

  "disinfection-sanitization": {
    heroImg: icon11,
    slug: "disinfection-sanitization",
    title: "Disinfection & Sanitization",
    icon: "🧴",
    tagline: "Advanced hygiene solutions to eliminate germs, bacteria & viruses",
    heroColor: "#002a3a",
    intro: "With the increasing awareness of infectious diseases, bacteria, and viruses, regular cleaning alone is no longer sufficient. Professional disinfection and sanitization services are essential to ensure harmful microorganisms are effectively eliminated. OnGuard Pest Controls provides advanced disinfection and sanitization services designed to create safer, healthier environments for individuals, families, and businesses.",
    whyImportant: [
      { title: "Disease Prevention", desc: "Harmful pathogens can survive on surfaces for hours or days. Disinfection helps prevent spread of viral infections, bacterial infections, and respiratory illnesses." },
      { title: "Improved Health & Safety", desc: "Regular sanitization reduces infection risk and promotes a healthier living and working environment." },
      { title: "Increased Confidence", desc: "In commercial spaces, visible hygiene practices build trust among customers and employees." },
      { title: "Regulatory Compliance", desc: "Businesses in healthcare and food industries must follow strict hygiene standards — professional disinfection ensures compliance." },
    ],
    signs: ["After infectious illness in the premises", "High footfall commercial spaces", "Healthcare and food industry requirements", "Post-construction or renovation", "Regular scheduled preventive disinfection"],
    methods: [
      { name: "ULV Fogging", desc: "Ultra Low Volume fogging disperses disinfectant as fine mist — covers large areas quickly, reaches hidden corners, effective against airborne pathogens." },
      { name: "Spray Disinfection", desc: "Manual spraying for high-touch surfaces, furniture, equipment, walls, and floors." },
      { name: "Surface Wiping", desc: "Critical surfaces cleaned using disinfectant wipes for maximum effectiveness on high-contact areas." },
      { name: "Electrostatic Spraying", desc: "Charged particles ensure uniform coating on all surfaces for thorough and even disinfection coverage." },
    ],
    sectors: ["Residential homes & apartments", "Hospitals, clinics & healthcare", "Schools & educational institutions", "Hotels, restaurants & factories"],
    preventiveTips: ["Maintain regular cleaning routines", "Wash hands frequently", "Avoid clutter", "Ensure proper ventilation in all areas"],
  },

  "ant-control": {
    heroImg: icon12,
    slug: "ant-control",
    title: "Ant Control Services",
    icon: "🐜",
    tagline: "Effective solutions to eliminate ants & prevent infestations",
    heroColor: "#1f2a00",
    intro: "Ant infestations are one of the most common pest problems faced by households, offices, and commercial establishments. In regions like Kerala, where humidity and warmth create ideal breeding conditions, ant infestations are frequent and difficult to control without professional help. OnGuard Pest Controls offers expert ant control services designed to eliminate colonies effectively and provide long-term prevention.",
    whyImportant: [
      { title: "Food Contamination", desc: "Ants invade food supplies, making them unsafe for consumption." },
      { title: "Structural Damage", desc: "Carpenter ants can damage wooden structures significantly." },
      { title: "Health Concerns", desc: "Ants carry bacteria and contaminate surfaces, posing hygiene risks." },
      { title: "Persistent Infestation", desc: "Ant colonies are difficult to eliminate completely without targeting the queen." },
    ],
    signs: ["Visible trails of ants", "Presence of nests in walls or soil", "Food contamination", "Small piles of dirt or debris near entry points"],
    methods: [
      { name: "Gel Bait Treatment", desc: "Ants consume bait and carry it back to the colony — the entire colony including the queen is eliminated. Highly effective, targeted, minimal disruption." },
      { name: "Spray Treatment", desc: "Used for immediate control of visible ants across large areas." },
      { name: "Dust Treatment", desc: "Applied in wall voids and cracks and crevices, providing long-lasting protection in hidden spaces." },
      { name: "Barrier Treatment", desc: "Creates a protective barrier around the property to prevent ant entry." },
      { name: "Nest Treatment", desc: "Direct treatment of nests for complete elimination of the entire colony." },
    ],
    sectors: ["Residential homes & apartments", "Offices & commercial spaces", "Restaurants & food industry", "Factories & warehouses"],
    preventiveTips: ["Keep food sealed and stored properly", "Maintain cleanliness throughout", "Fix moisture issues and leaks", "Seal cracks and gaps in walls"],
  },
};

// Map service card titles to slugs
export const TITLE_TO_SLUG = {
  "Rodent Control Services": "rodent-control",
  "Cockroach Control Services": "cockroach-control",
  "Bed Bug Control Services": "bed-bug-control",
  "Mosquito Control Services": "mosquito-control",
  "Housefly Services": "housefly-control",
  "Termite Control Services": "termite-control",
  "Wood Borer Control": "wood-borer-control",
  "Honey Bee Removal Service": "honey-bee-removal",
  "Snake Control Service": "snake-control",
  "Deep Cleaning Services": "deep-cleaning",
  "Disinfection & Sanitization": "disinfection-sanitization",
  "Ant Control Services": "ant-control",
};