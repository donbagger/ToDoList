
# To-Do List App

## 📋 About the Project

The **To-Do List App** is a simple, user-friendly, and visually appealing application designed to help users manage their daily tasks efficiently. This app allows you to:
- Add new tasks
- Mark tasks as completed
- Edit existing tasks
- Delete tasks from the list

The app is styled with an ancient papyrus theme, offering a unique visual experience. It is built with modern technologies for smooth functionality and ease of deployment.

---

## 🚀 Live Demo

Check out the live version of the app [here](https://donbagger.github.io/ToDoList).

---

## 🛠️ Built With

This project was built using the following technologies:

- **React.js**: A JavaScript library for building user interfaces.
- **Font Awesome**: For visually appealing icons used in buttons (edit, delete, complete).
- **CSS**: Custom styling for the ancient papyrus-inspired design.
- **Google Fonts**: For elegant typography using fonts like *Alegreya SC*.
- **GitHub Pages**: For hosting and deploying the app.
- **npm**: For managing dependencies and scripts.

---

## 📂 Folder Structure

The main project structure is as follows:

```
ToDoList/
├── public/             # Static assets (e.g., limewash background)
├── src/
│   ├── components/     # React components
│   │   ├── ToDoForm.js # Form to add tasks
│   │   ├── ToDoItem.js # Individual task with actions
│   │   ├── ToDoList.js # Component to display the list of tasks
│   │   ├── EditToDoForm.js # Form for editing tasks
│   ├── App.js          # Main React component
│   ├── App.css         # Main CSS file for styling
├── package.json        # Project configuration and dependencies
```

---

## ✨ Features

- **Add Tasks**: Quickly add new tasks using the input form.
- **Edit Tasks**: Modify tasks without losing their original state.
- **Mark as Completed**: Cross out tasks to mark them as done.
- **Delete Tasks**: Remove unwanted tasks from the list.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Ancient Papyrus Theme**: Unique visual design with limewash background and papyrus fonts.

---

## 📦 Installation

To run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/donbagger/ToDoList.git
   cd ToDoList
   ```

2. **Install Dependencies**:
   Ensure you have `npm` installed, then run:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   Start the app locally:
   ```bash
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`.

4. **Build for Production**:
   Create an optimized build for deployment:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

This app is deployed using **GitHub Pages**. To redeploy, follow these steps:

1. Install `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Deploy the app:
   ```bash
   npm run deploy
   ```

---

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add YourFeatureName"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request.

---

## 📝 License

This project is **open-source** and free to use under the MIT License. See the `LICENSE` file for more details.

---

## 🛡️ Acknowledgments

- **React.js** for powering the application.
- **Font Awesome** for the amazing icons.
- **Google Fonts** for the beautiful fonts.
- **GitHub Pages** for hosting the app.

---

## 📧 Contact

For any questions or feedback, feel free to reach out:

- **GitHub**: [@donbagger](https://github.com/donbagger)
- **Email**: your.email@example.com
