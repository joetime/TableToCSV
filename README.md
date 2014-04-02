TableToCSV
==========

Script to convert a table into a CSV file on the client side via javascript in a way that is Sofa King simple for developers and users.

My philosophy is that there's no need for a trip the server with separate code to handle this... the data is already right there in front of the user! It just needs to be formatted and served in a nice package.

GOALS:

1. Single-Click to CSV for user.
2. Simple drop-in script for developer, no dependencies.*
3. Clean data (no links, images, etc.), all characters properly rendered.
4. Works for large and small tables (some methods don't work above 3000 chars or so).
5. Works in all browsers (desktop).**

*Current script relies on jQuery, but it should be easy to get rid of that.
**IE is a no-go at the moment.
