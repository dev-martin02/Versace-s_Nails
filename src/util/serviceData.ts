// Define the type for a service
type NailService = {
    name: string;
    price: number;
    description: string;
  };
  
  // Create an array of fake service objects
export const nailServices: NailService[] = [
    {
      name: "Deluxe Gel Manicure",
      price: 45.99,
      description: "A luxurious gel manicure that lasts up to three weeks with no chipping. Includes nail shaping, cuticle care, and a relaxing hand massage."
    },
    {
      name: "Classic French Manicure",
      price: 35.99,
      description: "A timeless French manicure with a perfect white tip and natural pink base. Includes nail shaping and cuticle care."
    },
    {
      name: "Acrylic Full Set",
      price: 55.00,
      description: "Enhance your nails with a full set of acrylic extensions. Includes nail shaping, cuticle care, and polish of your choice."
    },
    {
      name: "Nail Art Design",
      price: 20.00,
      description: "Add custom nail art designs to your manicure. Choose from various patterns, decals, and embellishments."
    },
    {
      name: "Spa Pedicure",
      price: 50.00,
      description: "Relax with a soothing spa pedicure. Includes foot soak, exfoliation, nail shaping, cuticle care, and polish."
    }
  ];