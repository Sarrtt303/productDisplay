Setup Process:

1. Initialised a Next.js app using 'npm create-next-app@latest'. A set of options will show in terminal, I have used tsx, app folder structure, eslint enabled, Next.js routing enabled, and no import aliases. When the project is cretaed we make a few folders based on the general structure of a next.js app, lib folder conatins mongodb connetion file, pages/api caontains the server side code of getting data from the database nad sending it to the frontend, components file contains the client side components, namely productGrid and searchBar, and the app folder contains the layout, global csss and page.tsx which is the main component that will be rendered, all the components are imported into page.tsx and called for rendering. 
*NOTE: Next.js can handle both client and server side code in the same app, the files that have 'use client' above them are considered and treated as frontend code while 'use server' makes the app treat the file like backend code. If nothing is written, the app treats the file as server code by deafault.
2. Made a MongoDb database named 'productdisplay' that has a databse named 'products' and a collection named 'product'

3. a mongo db connection file was setup using javascript.

4. layout.tsx was edited to wrap the entire application, providing a consistent structure across different pages. The layout includes global styles and sets up the basic HTML structure for the application.

5. page.tsx contains the entire collection of components that will be rendered into the page.

6. Components are a product grid file and a search bar file that contains the products recieved from the api and logic tob search the page for the products required by the user.

7. API endpoints are set in pages/api/products.js as per the structural conventions of a next.js application

8. globals.css contains global css classes that work for the entire app, and  tailwind css configuration code.


Previews of the App and functionality is added

Example Mock API used: https://fakestoreapi.com/products 

How to run: open the directory in terminal and type 'npm run dev' in it, make sure to add your IP address in the mongoDb database or the backend will not work, no products will be displayed.

View the deployed page: https://product-display-alpha.vercel.app/

