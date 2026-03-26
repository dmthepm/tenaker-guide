import { EmergencyContact } from "@/lib/types";

export const emergencyContacts: EmergencyContact[] = [
  {
    name: "911 Emergency",
    phone: "911",
    description:
      "Cazadero is covered by Sonoma County dispatch. Response times can be 20-45 minutes due to remote location. Know your address.",
  },
  {
    name: "Sonoma West Medical Center",
    phone: "(707) 823-8511",
    address: "501 Petaluma Ave, Sebastopol, CA 95472",
    description:
      "Closest hospital with emergency department. 35 min drive from Cazadero.",
    driveTime: "35 min",
  },
  {
    name: "Santa Rosa Memorial Hospital",
    phone: "(707) 525-5300",
    address: "1165 Montgomery Dr, Santa Rosa, CA 95405",
    description:
      "Full trauma center. Larger facility with more specialists than Sebastopol.",
    driveTime: "50 min",
  },
  {
    name: "Urgent Care — Guerneville",
    phone: "(707) 869-2424",
    address: "16319 First St, Guerneville, CA 95446",
    description:
      "West County Health Centers urgent care. For non-life-threatening issues. Call first.",
    driveTime: "20 min",
  },
  {
    name: "Poison Control",
    phone: "1-800-222-1222",
    description:
      "National Poison Control Center. For poison oak exposure, call for treatment guidance.",
  },
  {
    name: "CAL FIRE / Sonoma County Fire",
    phone: "911",
    description:
      "Fire is a real risk in Sonoma County. If you smell smoke or see fire, call 911 immediately. Do not wait.",
  },
  {
    name: "PG&E Power Outage",
    phone: "1-800-743-5002",
    description:
      "Report or check on power outages. Cazadero loses power during storms.",
  },
];

export const safetyTips = [
  {
    title: "Poison Oak",
    content:
      'It grows EVERYWHERE in Sonoma County. "Leaves of three, let it be." It looks like a small plant or vine with shiny three-leaf clusters. If you touch it, wash with cold water and Tecnu soap within 2 hours. The oil (urushiol) causes severe itching rash that lasts weeks. Wear long pants on hikes.',
  },
  {
    title: "Ticks",
    content:
      "Check your body after every hike, especially behind ears, hairline, and waistband. Western blacklegged ticks carry Lyme disease. Remove with fine-tipped tweezers pulling straight up. Clean the bite. Save the tick in a sealed bag if possible.",
  },
  {
    title: "Mountain Lions",
    content:
      "Extremely rare to encounter, but they live here. If you see one: do NOT run. Face it, make yourself look big, speak loudly, back away slowly. They are almost never aggressive toward adults.",
  },
  {
    title: "Rattlesnakes",
    content:
      "Northern Pacific rattlesnakes live in the area. Watch where you step, especially on warm rocks and sunny trails. If bitten: stay calm, do NOT apply a tourniquet, get to a hospital.",
  },
  {
    title: "Ocean Safety",
    content:
      "The Sonoma Coast has extremely dangerous currents and sneaker waves. NEVER turn your back on the ocean. Do NOT swim at Goat Rock, Shell Beach, or other open coast beaches. People die here every year. Admire from a safe distance.",
  },
  {
    title: "Fire Evacuation",
    content:
      "Cazadero has one main road in and out (Cazadero Hwy). In a fire evacuation, follow Cazadero Hwy south to Monte Rio, then east to Guerneville. Have a bag packed with essentials. Sign up for SoCoAlert.com for emergency notifications.",
  },
  {
    title: "Road Safety",
    content:
      "Roads are narrow, winding, and dark at night with no streetlights. Deer cross frequently at dawn and dusk. Drive slowly, use high beams when safe, and honk before blind curves. Some roads flood in heavy rain.",
  },
];
