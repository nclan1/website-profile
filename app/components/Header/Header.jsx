

export default function Header() {
    return (
        <div className="flex justify-between p-20">

            <div className="text-2xl text-slate-500">
                nolan<br/>© 2024
            </div>

            <div className="flex items-center">
                <nav className="text-2xl flex gap-10">
                    <a>about</a>
                    <a>work</a>
                    <a>hobbies</a>
                    <a>contact</a>
                </nav>
            </div>
        </div>
    )
}