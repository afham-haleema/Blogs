# Blogs Website

A CRUD (Create, Read, Update, Delete) blogs website.

## Installation

1. Clone the repository: git clone https://github.com/afham-haleema/Blogs.git
2.  Install dependencies:
      cd Blogs
      npm install
3. Set up the database
   
    Create a MongoDB Atlas Account: If you haven't already, sign up for a free MongoDB Atlas account at https://www.mongodb.com/cloud/atlas.
    Create a Cluster: After logging in to MongoDB Atlas, create a new cluster by following the instructions provided. Choose your preferred cloud provider, region, and cluster configuration.
    Whitelist Your IP Address: In the MongoDB Atlas dashboard, navigate to the "Network Access" tab under the "Security" section. Click on the "Add IP Address" button and add your current IP address to the whitelist to allow connections to your cluster.
    Create a Database User: In the MongoDB Atlas dashboard, navigate to the "Database Access" tab under the "Security" section. Click on the "Add New Database User" button and create a new user with the necessary privileges for accessing your database.
    Connect to Your Cluster: In the MongoDB Atlas dashboard, navigate to the "Clusters" tab and click on the "Connect" button for your cluster. Choose "Connect Your Application" and copy the connection string provided.
    Replace Connection String in Code: Replace the dbURI variable in your code with the connection string you copied from MongoDB Atlas. Make sure to replace <password> with the password of the database user you created.


4. Start the development server
     
## Usage

1. Create a new blog post by clicking the "New Blogs" button.
2. Read existing blog posts by clicking on the Blogs.
3. Update or delete blog posts by clicking the corresponding buttons on each post.

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Node.js
- Express
- MongoDB





