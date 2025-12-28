2. Problem Statement
⚠ Important Notes
Focus on React fundamentals and logic, not styling.
Keep UI minimal and functional.
Code structure, hooks usage, and correctness are more important than design.
Do not use external state management libraries.
3. Application Overview
Build a Mini Fleet Management App using React that includes:

Authentication
Routing & protected routes
Fleet CRUD operations
Basic performance optimization using React memoization techniques
4. Routes & Access Control
Route	Access Type	Description
/login	Public	Login page
/admin	Protected	Admin dashboard
5. Page 1: Login Page (/login)
UI Requirements
Email input
Password input
Login button
Validation Logic
Valid credentials:

Email: admin@gmail.com
Password: admin1234
Behavior
On success:

Show alert: "Login success"
Update authentication state
Navigate to /admin
On failure:

Show alert: "Wrong email or password"
Mandatory React Concepts
useState → input & auth state
useRef → focus email input on mount
useEffect → handle side effects
React Router navigation
6. Protected Routing Requirement
/admin must be accessible only after login
Unauthenticated access should redirect to /login
Implement a reusable ProtectedRoute component
7. Page 2: Admin Dashboard (/admin)
The admin dashboard must contain:

Navbar
Sidebar
Main Content Area
8. Sidebar: Add Fleet Form
Form fields:

Vehicle Registration Number (text)
Category (Auto / Car / Truck / Bus)
Driver Name (text)
Availability Status (Available / Unavailable)
Add Fleet button
Behavior
Validate required fields
Add fleet to state on valid submission
Clear form after submission
Hooks Required
useState for form and fleet data
Controlled inputs
9. Main Content: Fleet Cards
Render all fleets as cards.

Card Content
Vehicle Reg No
Category
Driver Name
Availability Status
Static vehicle image (same image for all)
Layout
3 cards per row (basic CSS grid/flex)
10. Card Actions
Each card must support:

10.1 Update Driver
Open prompt() for new driver name
Update only if input is valid (non-empty)
Ignore invalid input (optional alert)
10.2 Change Availability
Toggle availability status
Update UI immediately
10.3 Delete Vehicle
Show confirm() before deleting
Delete only if confirmed
Re-render UI correctly
11. Performance Optimization Requirement (Mandatory)
To avoid unnecessary re-renders:

Optimization to Implement
Extract FleetCard into a separate component

Wrap FleetCard with React.memo

Use useCallback for:

Update Driver handler
Change Availability handler
Delete handler
Expected Outcome
Updating one fleet should not re-render all fleet cards
Only the affected card should re-render
You are not required to prove performance using tools, but the structure should clearly support it.

12. Edge Cases & Validation
Handle the following:

Add Fleet
Required fields must not be empty
Clear form after adding
Update Driver
Prevent empty or whitespace-only names
Delete Vehicle
Always confirm before deletion