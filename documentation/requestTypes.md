## GET

This is a read command to get the data, very easy

## POST

Post is a request which creates NEW data each time it is send. It is NOT IDEMPOTENT because it will create a new piece of data each time it is raised (think create new Contact or create new comment)

POST is SAFE - It creates new data and does not modify existing data.
POST is cachable, because it always creates new data.
POST can be used without knowing the URI, since it will be generated for you by the system.
We would target a specific collection in the case of this class

## PUT

PUT is a request to create new or entirely update something. it is IDEMPOTENT which means no matter how many times you send the exact same one, it will do the same thing (such as save the same contact over and over).

PUT is UNSAFE - it modifies things already on the server.
PUT is not cachable, since it can modify data thus the data may become stale.
PUT will target a specific doc, such as /contact/:id

https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/PUT-vs-POST-Whats-the-difference#:~:text=The%20key%20difference%20between%20PUT,identified%20by%20the%20URL%20provided.

https://www.keycdn.com/support/put-vs-post

## Status Codes (Success)

### 200s

200 - OK - Successful request
201 - Created - Something was created via the request
204 - No Content - Request was successful, nothing to return

### 300s (redirect)

301 - Moved Permanently - The location was moved permamently
302 - Temp redirect
304 - Not Modified - Resources has not changed

### 400s (Client Error)

400 - Bad request
401 - Unauthorizzed
403 - Forbid
404 - Not found

### - 500s (Server Error)

500 -Internal server error
502 - Bad gateway - gateway has invalid response
503 - Service down
