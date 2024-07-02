**Website Name:** Majestic Villas  
**Live website link:** [https://majestic-villas.web.app/](https://majestic-villas.web.app/)
## Overview 
Majestic Villas is a dynamic web application dedicated to the luxury property category. It features user authentication, responsive design,
and detailed property listings, built with modern web technologies

## Installation

1. Clone the repository

    ```
    git clone https://github.com/fms-faisal/skyview-apartments-client.git
    ```
2. Navigate to the project directory
    ```
    cd skyview-apartments-client
    ```

3. Install dependencies
    ```
     npm install
    ```

4. Run the development server
   ```
     npm run dev
   ```
**Website Features**

1. **User Authentication:** Includes email and password-based authentication with additional options for Google login or one other social login (Google & Twitter). Users can register and log in, with error handling and password requirements.
2. **Dynamic Navbar:** The navbar features the website name, Home, Update Profile, and user profile. It displays user images if logged in, a login button if not, and changes dynamically based on user authentication status.
3. **Property Listings:** The Estates section showcases properties from the selected category with details like image, title, ID, segment name, description, price, status (sale/rent), area, location, facilities, and a "View Property" button.
4. **Property Details Page:** Clicking "View Property" takes users to a detailed page with comprehensive information about the selected property. This is a protected route requiring user login.
5. **Banner with Slider:** The homepage includes a banner with a slider (using Swiper slider) featuring at least three slides to highlight key properties or features.

