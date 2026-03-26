import { EmergencyContact } from "@/lib/types";

export const emergencyContacts: EmergencyContact[] = [
  {
    name: "911 Emergency",
    phone: "911",
    description:
      "Cazadero is covered by Sonoma County dispatch. Response times can be 20-45 minutes due to remote location. Know your exact address.",
  },
  {
    name: "Santa Rosa Memorial Hospital",
    phone: "(707) 525-5300",
    address: "1165 Montgomery Dr, Santa Rosa, CA 95405",
    description:
      "Closest emergency room. Level II Trauma Center with 24/7 ER. For serious injuries or medical emergencies, this is the destination.",
    driveTime: "50 min",
  },
  {
    name: "Russian River Health Center",
    phone: "(707) 869-2849",
    address: "16387 First St, Guerneville, CA 95446",
    description:
      "Federally qualified health center. Walk-ins welcome. Closest medical clinic to Cazadero. After-hours: (707) 571-7029.",
    driveTime: "20 min",
  },
  {
    name: "Sebastopol Urgent Care",
    phone: "(707) 509-5961",
    address: "555 Petaluma Ave, Suite B, Sebastopol, CA 95472",
    description:
      "Walk-in urgent care for non-life-threatening issues. Mon-Fri 8:30am-7pm, Sat 11am-5pm. Closed Sun.",
    driveTime: "35 min",
  },
  {
    name: "Cazadero Volunteer Fire",
    phone: "(707) 632-5390",
    address: "5980 Cazadero Hwy, Cazadero, CA 95421",
    description: "Local volunteer fire department. First responders for Cazadero.",
  },
  {
    name: "Poison Control",
    phone: "1-800-222-1222",
    description:
      "National Poison Control Center. For poison oak, snake bites, or any poisoning. Available 24/7.",
  },
  {
    name: "PG&E Power Outage",
    phone: "1-800-743-5002",
    description:
      "Report or check on power outages. Cazadero loses power during storms and PSPS events that can last 24-72+ hours.",
  },
  {
    name: "VCA PetCare East (24/7 Emergency Vet)",
    phone: "(707) 579-3900",
    address: "2425 Mendocino Ave, Santa Rosa, CA 95403",
    description:
      "24/7 emergency veterinary hospital. Closest true emergency vet.",
    driveTime: "50 min",
  },
  {
    name: "Noel's Automotive (closest mechanic)",
    phone: "(707) 865-9602",
    address: "9898 Main St, Monte Rio, CA 95462",
    description:
      "NAPA Auto Care certified. Closest mechanic to Cazadero. Mon-Fri 9am-5pm.",
    driveTime: "15 min",
  },
  {
    name: "Occidental Towing",
    phone: "(707) 874-3535",
    description:
      "Covers Cazadero, Monte Rio, Guerneville area. Mon-Fri 8am-5pm.",
  },
];

export const safetyTips = [
  {
    title: "Poison Oak",
    content:
      "It grows everywhere out here. Leaves of three, let it be. Within 10 minutes of contact, 50% of the oil can still be removed by washing. Within 15 minutes, only 25%. After 30 minutes, the oil has absorbed and a reaction is likely. Keep Tecnu on set. It's available at Lark Drugs in Guerneville.",
  },
  {
    title: "Ticks",
    content:
      "A February 2026 report found 7.41% of ticks tested positive for Lyme disease on Sonoma County trails. Check your body after every outdoor activity. Wear light-colored long pants. Treat clothing with permethrin spray. Remove ticks with fine-tipped tweezers pulling straight up. Infection requires 24-48 hours of attachment, so early removal prevents disease.",
  },
  {
    title: "Mountain Lions",
    content:
      "About 75 estimated in Sonoma County. No recorded attacks in Sonoma County parks. If you see one, do not run. Face it, make yourself look big, speak loudly, and back away slowly. They are almost never aggressive toward adults.",
  },
  {
    title: "Rattlesnakes",
    content:
      "Northern Pacific rattlesnakes live in the area, active on Austin Creek Road near Cazadero. Watch where you step, especially on warm rocks and sunny trails. If bitten, stay calm, do not apply a tourniquet, and get to a hospital.",
  },
  {
    title: "Ocean Safety",
    content:
      "The Sonoma Coast has extremely dangerous currents and sneaker waves. Never turn your back on the ocean. Do not swim at Goat Rock, Shell Beach, or other open coast beaches. People die here every year. Admire from a safe distance.",
  },
  {
    title: "Fire Evacuation",
    content:
      "Cazadero has one road in and out. In an evacuation: Cazadero Hwy to Hwy 116 to Guerneville to Hwy 101. Mountain roads in smoke are not an option. Best to sign up before you arrive: SoCoAlert (socoemergency.org/get-ready/sign-up), Nixle (text ZIP code 95421 to 888777), PG&E PSPS alerts (pge.com/psps).",
  },
  {
    title: "Road Safety",
    content:
      "Roads are narrow, winding, and dark at night. No streetlights. Deer, foxes, and raccoons are active at dawn and dusk. Drive slow, high beams when safe. If someone behind you flashes their lights, pull off and let them pass. Some roads flood in heavy rain.",
  },
  {
    title: "Cell Service",
    content:
      "AT&T has very spotty coverage in Cazadero. T-Mobile and Verizon are effectively dead. Some spots near the General Store get a bar or two, but don't count on it. Free WiFi is available at the General Store and the firehouse (network: EQAC). Download maps, music, and anything you need before driving up. Walkie-talkies are recommended for on-set communication.",
  },
  {
    title: "No Gas",
    content:
      "There is no gas station in Cazadero. Nearest is Lambert's 76 in Guerneville (21 min). I've learned to fill up every time I pass through Guerneville.",
  },
  {
    title: "No Nearby ER",
    content:
      "Palm Drive Hospital in Sebastopol has been closed since 2014. The nearest ER is Santa Rosa Memorial Hospital, 50 minutes away. For non-emergencies, Russian River Health Center in Guerneville (20 min) sees walk-ins.",
  },
];
