/* Onore Cafe — menu data (GR primary / EN secondary). Prices in euro.
   Edit freely: add/remove items, change prices. Each item: {n:greek, e:english, p:price}. */
window.ONORE_MENU = [
  { id:"coffee", gr:"Καφές", en:"Coffee", items:[
    {n:"Ελληνικός Μονός", e:"Greek Coffee", p:2.00},
    {n:"Ελληνικός Διπλός", e:"Greek Coffee Double", p:2.50},
    {n:"Φίλτρου", e:"Filter Coffee", p:3.50},
    {n:"Νες Καφέ Ζεστός", e:"Nescafe", p:3.50},
    {n:"Φραπέ", e:"Nescafe Frappe", p:3.50},
    {n:"Espresso / Stretto / Lungo", e:"Espresso", p:2.50},
    {n:"Espresso Διπλός", e:"Double Espresso", p:3.50},
    {n:"Macchiato", e:"Macchiato", p:2.50},
    {n:"Macchiato Double", e:"Macchiato Double", p:3.50},
    {n:"Americano Διπλός", e:"Double Americano", p:3.50},
    {n:"Cappuccino", e:"Cappuccino", p:3.50},
    {n:"Cappuccino Double", e:"Cappuccino Double", p:4.00},
    {n:"Cappuccino Latte", e:"Cappuccino Latte", p:4.00},
    {n:"Ice Latte", e:"Ice Latte", p:4.00},
    {n:"Freddo Espresso", e:"Freddo Espresso", p:3.50},
    {n:"Freddo Cappuccino", e:"Freddo Cappuccino", p:3.50},
    {n:"Flat White", e:"Flat White", p:3.50},
    {n:"Freddoccino", e:"Freddoccino", p:4.00},
    {n:"Τσάι Ζεστό (διάφορες γεύσεις)", e:"Hot Tea", p:3.00}
  ]},
  { id:"chocolate", gr:"Σοκολάτες", en:"Chocolates", items:[
    {n:"Σοκολάτα (κρύα ή ζεστή) — Γάλακτος/Λευκή Rusberry/Black Forest/Bueno/Πορτοκάλι", e:"Cold or Hot Chocolate", p:3.50},
    {n:"Σοκολάτα με Σαντιγί", e:"Chocolate with whipped cream", p:4.00}
  ]},
  { id:"juice", gr:"Χυμοί", en:"Juices", items:[
    {n:"Χυμός (Πορτοκάλι/Ροδάκινο/Βύσσινο/Sour Cherry/Μπανάνα/Λεμόνι/Motion)", e:"Juice", p:3.00},
    {n:"Φυσικός Χυμός Πορτοκάλι", e:"Fresh Orange Juice", p:4.00},
    {n:"Φυσικός Χυμός Ανάμεικτος", e:"Fresh Mixed Juice", p:5.00},
    {n:"Σπιτική Λεμονάδα", e:"Homemade Lemonade", p:4.00}
  ]},
  { id:"soft", gr:"Αναψυκτικά", en:"Soft Drinks", items:[
    {n:"Αναψυκτικά", e:"Soft Drinks", p:3.00},
    {n:"Ice Tea (Λεμόνι/Ροδάκινο/Πράσινο)", e:"Ice Tea", p:3.50},
    {n:"Ξινό Νερό", e:"Xino Nero", p:3.50},
    {n:"Grapefruit Soda", e:"Grapefruit Soda", p:3.50},
    {n:"Ανθρακούχο Νερό", e:"Sparkling Mineral Water", p:3.00},
    {n:"Νερό Εμφιαλωμένο 0.5lt", e:"Mineral Water 0.5l", p:0.50},
    {n:"Νερό Εμφιαλωμένο 1lt", e:"Mineral Water 1l", p:1.00}
  ]},
  { id:"beer", gr:"Μπύρες", en:"Beers", items:[
    {n:"Amstel / Mythos / Alfa / Heineken", e:"", p:4.00},
    {n:"Kaiser / Mamos (500ml)", e:"", p:4.00},
    {n:"Corona", e:"", p:5.00},
    {n:"Alfa Χωρίς Αλκοόλ", e:"Alfa non-Alcoholic", p:4.00}
  ]},
  { id:"wine", gr:"Κρασιά", en:"Wines", items:[
    {n:"BiancoNero Ερυθρός Ξηρός (Syrah-Merlot) 187,5ml", e:"Red Dry", p:6.00},
    {n:"BiancoNero Λευκός Ξηρός (Sauv. Blanc-Chardonnay-Ασύρτικο) 187,5ml", e:"White Dry", p:6.00},
    {n:"Moscato D'Asti", e:"", p:7.00}
  ]},
  { id:"ouzo", gr:"Τσίπουρο / Ούζο", en:"Tsipouro / Ouzo", note:"Σερβίρεται με ατομικό μεζέ / Served with snack", items:[
    {n:"Τσίπουρο Νταραίος 50ml", e:"", p:3.00},
    {n:"Τσίπουρο Ηδωνικό 50ml", e:"", p:3.00},
    {n:"Ούζο Κωσταίας, Καλαμάτα 50ml", e:"", p:3.00},
    {n:"Ούζο Στεφανούρη, Καλαμάτα 50ml", e:"", p:3.00}
  ]},
  { id:"drinks", gr:"Ποτά", en:"Drinks", items:[
    {n:"Ποτό", e:"Drink", p:6.00},
    {n:"Special", e:"", p:8.00},
    {n:"Σφηνάκι", e:"Shot", p:3.00},
    {n:"Red Bull", e:"", p:5.00},
    {n:"Gordons Space", e:"", p:5.00},
    {n:"Μεταξά 5*", e:"Metaxa 5*", p:6.00},
    {n:"Glenfiddich / Talisker / Belvedere / Grey Goose / Hendrick's", e:"", p:10.00},
    {n:"Φιάλη Απλή", e:"Regular Bottle", p:70.00},
    {n:"Φιάλη Special", e:"Special Bottle", p:90.00}
  ]},
  { id:"cocktails", gr:"Cocktails", en:"Cocktails", items:[
    {n:"Margarita", e:"", p:9.00},{n:"Negroni", e:"", p:9.00},{n:"Daiquiri", e:"", p:9.00},
    {n:"Mojito", e:"", p:9.00},{n:"Aperol Spritz", e:"", p:9.00},{n:"Caipiroska", e:"", p:9.00},
    {n:"Tequila Sunrise", e:"", p:9.00},{n:"Caipirinha", e:"", p:9.00},{n:"Cosmopolitan", e:"", p:9.00},
    {n:"Blue Lagoon", e:"", p:9.00},{n:"Mai Tai", e:"", p:9.00},{n:"Porn Star Martini", e:"", p:9.00},
    {n:"Long Island", e:"", p:10.00},{n:"Zombie", e:"", p:10.00},{n:"Daiquiri Frozen Strawberry", e:"", p:10.00}
  ]},
  { id:"icecream", gr:"Παγωτά & Γλυκά", en:"Ice Cream & Sweets", items:[
    {n:"Milkshake (επιλογή από τη λίστα παγωτών)", e:"Milkshake", p:5.00},
    {n:"Παγωτό (ανά μπάλα)", e:"Ice Cream (per scoop)", p:2.50},
    {n:"Γρανίτα (Bubble Gum/Ροδάκινο/Καρπούζι/Limoncello)", e:"Granita", p:5.00},
    {n:"Σουφλέ Σοκολάτας", e:"Chocolate Soufflé", p:4.50},
    {n:"Brownies Σοκολάτας", e:"Chocolate Brownies", p:4.50},
    {n:"Μηλόπιτα", e:"Apple Pie", p:4.50}
  ]},
  { id:"waffles", gr:"Waffles", en:"Waffles", note:"Με παγωτό: +2,50 ανά μπάλα / With ice cream: +2,50 per scoop", items:[
    {n:"Πραλίνα - Σιρόπι", e:"Praline - Syrup", p:5.00},
    {n:"Πραλίνα - Μπισκότο - Σαντιγί - Σιρόπι", e:"", p:6.00},
    {n:"Πραλίνα - Μπανάνα - Σαντιγί - Σιρόπι", e:"", p:6.00},
    {n:"Πραλίνα - Μπισκότο - Μπανάνα - Σαντιγί - Σιρόπι", e:"", p:6.50},
    {n:"Μέλι - Καρύδι - Γιαούρτι - Φρούτα Εποχής", e:"", p:7.00}
  ]},
  { id:"pancakes", gr:"Pancakes", en:"Pancakes", note:"Extras +0,50", items:[
    {n:"Σοκολάτα", e:"Chocolate", p:5.50},
    {n:"Σοκολάτα Γάλακτος & Bueno", e:"", p:6.00},
    {n:"Φράουλα", e:"Strawberry", p:6.50},
    {n:"Σιρόπι Σφενδάμου Classic", e:"Classic / Maple Syrup & Butter", p:8.50},
    {n:"Αλμυρό (Τυρί, Μπέικον)", e:"Savoury (Cheese, Bacon)", p:7.50}
  ]},
  { id:"croissant", gr:"Croissant", en:"Croissant", items:[
    {n:"Croissant Βουτύρου", e:"French Butter Croissant", p:3.00},
    {n:"με Σοκολάτα", e:"with Chocolate", p:4.00},
    {n:"με Σοκολάτα & Φρούτα Εποχής", e:"Chocolate & Seasonal Fruits", p:5.00},
    {n:"Γεμιστό Μαρμελάδα Βερίκοκο Bonne Maman", e:"Apricot Jam", p:4.00},
    {n:"Γεμιστό Μαρμελάδα Φράουλα Bonne Maman", e:"Strawberry Jam", p:4.00},
    {n:"Αλμυρό με Τυρί, Μορταδέλα & Ρόκα", e:"Mortadella, Cheese & Rocket", p:4.00},
    {n:"Αλμυρό με Scrambled Eggs", e:"with Scrambled Eggs", p:5.00}
  ]},
  { id:"pinsa", gr:"Pinsa", en:"Pinsa", items:[
    {n:"Μαργαρίτα", e:"Margherita", p:9.00},
    {n:"Pesto, Μοτσαρέλα & Ντοματίνια", e:"", p:9.00},
    {n:"Μορταδέλα & Ρόκα", e:"Mortadella & Arugula", p:10.00},
    {n:"Prosciutto & Ρόκα", e:"Prosciutto & Arugula", p:13.00},
    {n:"Μεσογειακή (Ψητά Λαχανικά)", e:"Mediterranean (Grilled Veg)", p:10.00},
    {n:"Ελληνική (Φέτα, Πιπεριά, Ελιές, Κρεμμύδι)", e:"Greek", p:10.00},
    {n:"Μπέικον & Πιπεριά", e:"Bacon & Bell Pepper", p:10.00}
  ]},
  { id:"food", gr:"Φαγητό", en:"Food", items:[
    {n:"Ντάκος", e:"Dakos Cretan Salad", p:8.00},
    {n:"Πράσινη Σαλάτα", e:"Green Salad", p:7.00},
    {n:"Μπαμπανάτσα (προζυμένιο ψωμί με ντομάτα)", e:"Messinian Dish", p:5.00},
    {n:"2 Χειροποίητα Μπιφτέκια Μοσχάρι (μερίδα)", e:"2 Beef Burger Patties", p:10.00},
    {n:"Κοτόπουλο Φιλέτο Στήθος (μερίδα)", e:"Chicken Breast Fillet", p:10.00},
    {n:"Κοτομπουκιές Νιτσιάκος", e:"Chicken Nuggets", p:9.00},
    {n:"Club Sandwich (Ζαμπόν ή Γαλοπούλα) & Πατάτες", e:"Club Sandwich", p:8.00},
    {n:"Club Sandwich Φιλέτο Κοτόπουλο & Πατάτες", e:"Chicken Club", p:8.50},
    {n:"Burger Φιλέτο Κοτόπουλο & Μπέικον, Πατάτες", e:"Chicken Burger", p:9.00},
    {n:"Burger Μοσχαρίσιο Χειροποίητο, Πατάτες", e:"Beef Burger", p:9.00},
    {n:"Burger Λαχανικών", e:"Vegetable Burger", p:8.00}
  ]},
  { id:"breakfast", gr:"Πρωινό & Τοστ", en:"Breakfast & Toast", items:[
    {n:"Τοστ Τυρί & Ζαμπόν ή Γαλοπούλα", e:"Toast Cheese & Ham/Turkey", p:3.00},
    {n:"Τοστ σε Προζυμένιο Ψωμί", e:"Sourdough Toast", p:4.00},
    {n:"Λουκουμάδες με Μέλι & Καρύδι ή Σοκολάτα", e:"Loukoumades", p:5.00},
    {n:"Τηγανόψωμο Μεσσηνίας (Φέτα ή Μέλι)", e:"Tiganopsomo", p:5.00},
    {n:"Ομελέτα με Πράσινη Σαλάτα", e:"Omelette with Green Salad", p:6.50},
    {n:"Ομελέτα Special", e:"Omelette Special", p:8.50},
    {n:"Αυγά με Μπέικον σε Προζυμένιο Ψωμί", e:"Eggs & Bacon on Sourdough", p:7.50},
    {n:"Προζυμένιο Ψωμί με Βούτυρο, Μέλι ή Μαρμελάδα", e:"Sourdough w/ Butter, Honey/Jam", p:5.00},
    {n:"Αβοκάντο Τόστ με 2 Αυγά Ποσέ", e:"Avocado Toast, 2 Poached Eggs", p:6.00},
    {n:"Γιαούρτι με Μέλι", e:"Yogurt with Honey", p:5.00},
    {n:"Φρουτοσαλάτα", e:"Fruit Salad", p:5.00},
    {n:"Φρουτοσαλάτα με Γιαούρτι", e:"Fruit Salad with Yogurt", p:6.00},
    {n:"Φρουτοσαλάτα με Παγωτό", e:"Fruit Salad with Ice Cream", p:8.00}
  ]}
];
