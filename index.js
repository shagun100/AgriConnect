// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}
function showChatBot() {
    document.getElementById('chat-bot').style.display = 'block';
  }

  // Function to send a message (just a placeholder)
  function sendMessage() {
    var input = document.getElementById('chat-input').value;
    var messagesDiv = document.getElementById('chat-messages');
    var message = document.createElement('p');
    message.textContent = 'You: ' + input;
    messagesDiv.appendChild(message);
    // You can implement your chat bot logic here to respond to messages
    // For now, let's just clear the input field
    document.getElementById('chat-input').value = '';
  }

  // Add event listener to "help me" hyperlink
  document.getElementById('Help Me').addEventListener('click', showChatBot);
<script>
  // Function to handle form submission
  document.querySelector('.comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission (store comment, update UI, etc.)
    // You may need to use AJAX or submit the form data to a server using fetch or XMLHttpRequest
    // Once the comment is successfully added, update the UI to display the new comment
  });
</script>
  

initMap();