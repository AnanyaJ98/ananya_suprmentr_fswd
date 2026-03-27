Assignment (09/02/2026)

Assignment Name : Internet Explorer

Description : Draw and explain the client-server architecture and trace what happens when you open a website.



The diagram represents a client–server model, which is the foundation of how the Internet works.



Components:

\-----------------

1\. Clients (Client1, Client2, Client3)

* These are user devices like: Mobile phones, Computer, Laptops
* Clients initiate requests.
* Example: Opening a website, sending a search query



2\. Internet (Network)

* Acts as a communication medium between client and server.
* Uses protocols like: HTTP / HTTPS, TCP/IP
* Transfers data in the form of requests and responses.



3\. Server

A powerful computer that:

* Receives client requests
* Processes them
* Sends back responses
* Hosts websites, applications, APIs, etc.
* Example: When you open Google, a server processes your request.



4\. Database

* Stores data permanently.
* Server interacts with it to: Fetch data (query), Modify data (update)
* Example: User login details, Website content, Product information



\----------------------------------------------------------------------------------------------------------------------------------------------------



Working Principle:

\-------------------------

1. Client sends a request
2. Internet transfers it
3. Server processes it
4. Server communicates with database (if needed)
5. Response is sent back to client



\------------------------------------------------------------------------------------------------------------------------------------------------------



Tracing: What Happens When You Open a Website:

\---------------------------------------------------------------------



Step 1: User Action (Client Side)

* You type a URL (e.g., www.example.com) in the browser.
* The client (your device) creates a request.



Step 2: Request Sent via Internet

* The request travels through the Internet.
* DNS (Domain Name System) converts the website name into an IP address.



Step 3: Request Reaches Server

* The server receives the request.
* It understands what the client wants (e.g., homepage).



Step 4: Server Processing

The server:

* Checks request type
* Executes logic (backend processing)



Step 5: Database Interaction

If data is required:

* Server sends a query/update to database
* Database returns required data



Server Sends Response

Server prepares response:

* HTML
* CSS
* JavaScript

Sends it back through Internet



Client Displays Website

* Browser receives response
* Renders the webpage visually



\--------------------------------------------------------------------------------------------------------------------------------------------------------------------------



The client–server architecture is a distributed system where multiple clients request services from a centralized server through the Internet. The server processes these requests, interacts with the database if necessary, and sends back responses. This model ensures efficient communication, scalability, and centralized data management.





