export default function Features() {
    const features = [
      {
        icon: "🛡️",
        title: "Secure Transactions",
        description: "Make worry-free payments with our trusted payment.",
      },
      {
        icon: "📦",
        title: "Reliable Shipping",
        description: "Quick and reliable delivery of your purchases.",
      },
      {
        icon: "🔄",
        title: "Hassle-Free Returns",
        description: "Enjoy our extended 60-day return policy.",
      },
      {
        icon: "⏳",
        title: "Customer Support",
        description: "Our dedicated help center is available 24/7.",
      },
    ];
  
    return (
      <div className="bg-gray-100 p-6 rounded-lg  mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center  justify-between gap-6 ">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-4xl">{feature.icon}</span>
              <div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  