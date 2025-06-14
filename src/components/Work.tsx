export default function Work(){

    const projects = [
        {
            title: "Expense Tracker", 
            description: "A web application to track personal expenses.",
            images: "../../public/images/expense-tracker.jpg",
        },
        {
            title: "Pizza Delivery App", 
            description: "A website to order personalized pizza.",
            images: "../../public/images/expense-tracker.jpg",
        },
        {
            title: "Chat App", 
            description: "A web application to connect with people.",
            images: "../../public/images/expense-tracker.jpg",
        }
    ]
    return (
        <section className="py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Work</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
            Here are some of the projects I have worked on.
        </p>
        {/* Add your work content here */}
        <ul projects={}>
            <li>

            </li>
        </ul>
        </section>
    );
}