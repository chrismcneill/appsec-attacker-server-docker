# Appsec Attacker Server
The intentions of this project is to have a simple to run 'server' that I can use (and whoever else finds it useful) to simulate some of the actions of an attacker.

These are things such as supplying/listening for keylogger data that could be referenced in an attack. In real-world, these resources and/or scripts may be placed on an atackers system or other vulnerable environment that an attacker has compromised and is using as a host for these. This server is to allow me to perform these sorts of tests in a controlled manner.


## Available resources

Some attacks require access to a file/script/image that contains something of use to the attacker. The table below will provide a list of such resources that are available on this server.

| File                 |   Description  |
| /js/keyloger.js      |   Simple keylogger script that listens to keys being pressed on a form. Entered data sent to attacker endpoint (see keylogger section below) |

## Available Endpoints

Some scripts require an endpoint that picks up the attack so the attacker can perform an action using the captured information. The table below will provice a list of such endpoints that are exposed on this server.

| Endpoint       | Description |
| /Keylogger     |  Listens to the input from the supplied keylogger.js file and simply logs out the recieved data |




#Run the image
   > docker run -p 80:8000 myserver

# Find IP for guest (on windows)
   > docker-machine ip default
