$(document).ready(function () {
  // Function to get service description based on service name
  function getServiceDescription(serviceName) {
    // Define your service descriptions as an object
    var serviceDescriptions = {
      "Local Removals": "Local Removals is our specialized service for helping you relocate within the same city or a nearby area. We understand that moving locally can be just as challenging as long-distance moves. With our experienced team and reliable transportation, we ensure a hassle-free move for you. Whether you're moving to a new home or office in your local area, you can count on us to provide efficient and cost-effective solutions. Our goal is to make your local move as smooth and stress-free as possible.",
      "Long Haul Removals": "Long Haul Removals is our specialized service for handling long-distance moves, whether you're relocating to another city or even across the country. We understand the unique challenges associated with long-distance moves, including logistics, packing, and transportation. With our experienced team and a fleet of reliable vehicles, we ensure a seamless and secure relocation experience. Trust us to take care of every detail, so you can focus on settling into your new destination. Your belongings are in safe hands during the entire journey.",
      "Commercial Moves":  "Our Commercial Moves service is tailored to meet the unique requirements of businesses and organizations. We specialize in relocating offices, stores, and other commercial spaces efficiently and professionally. With a focus on minimizing downtime and disruption to your operations, our experienced team ensures a smooth transition to your new commercial location. We handle all aspects of the move, including packing, transportation, and setup, so you can concentrate on your business while we take care of the move.",
      "Man & Van Services": "Our Man & Van Services provide a convenient and cost-effective solution for small-scale moves and transportation needs. Whether you need to transport a few items or a small apartment's worth of belongings, our experienced team and well-equipped van are ready to assist you. From pickups and deliveries to small residential moves, our Man & Van Services offer reliability and efficiency. We handle your items with care and ensure they reach their destination safely.",
      "Waste Clearance": "Our Waste Clearance service is designed to help you responsibly and efficiently dispose of unwanted items and waste. Whether you have household clutter, old furniture, or construction debris, our team will handle the removal and disposal process for you. We prioritize environmentally friendly practices, ensuring that recyclable materials are properly recycled and waste is disposed of in compliance with local regulations. Let us take care of the heavy lifting and cleanup, so you can enjoy a clutter-free space.",
      "Office Clearance": "Our Office Clearance service is tailored to meet the needs of businesses looking to declutter, downsize, or relocate their office space. We provide efficient and secure removal of office furniture, equipment, and electronic waste. Our experienced team ensures the proper handling and disposal of confidential documents and sensitive materials, maintaining compliance with data protection regulations. With our Office Clearance service, you can streamline your workspace and focus on your core business activities, leaving the clearing and cleaning to us."
    };

    // Return the relevant description based on the service name
    return serviceDescriptions[serviceName] || "No description available.";
  }

  // Create the modal template
  const modalTemplate = `
    <div class="modal fade" id="serviceModal" tabindex="-1" role="dialog" aria-labelledby="serviceModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="serviceModalLabel">Service Description</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="service-description"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Append the modal template to the modalContainer div
  $("#modalContainer").append(modalTemplate);

  // Handle click event for list items
  $(".portfolio__item a").click(function () {
    const serviceName = $(this).find(".portfolio__item-title").attr("value");
    const description = getServiceDescription(serviceName);
    $("#serviceModal .service-description").html(description);

    // Show the modal
    $("#serviceModal").modal("show");

    // Scroll to the top of the modal
    $("#serviceModal").animate({ scrollTop: 0 }, "fast");
  });
});