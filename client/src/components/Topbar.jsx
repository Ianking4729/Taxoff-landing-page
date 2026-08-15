import { useState, useEffect } from 'react'
import './TopBar.css'
import { Clock, Mail, Phone } from 'lucide-react'

function TopBar() {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const onScroll = () => {
            // Hide after scrolling past the hero (100vh)
            setVisible(window.scrollY < window.innerHeight)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className={`topbar ${visible ? '' : 'hidden'}`}>
            <div className="topbar-inner">
                <div className="topbar-left">
                    <Clock size={18} />
                    <span>Mon-Fri 7:00 AM - 5:00 PM EST</span>
                </div>
                <div className="topbar-right">
                    <Mail size={18} />
                    <a href="mailto:tax-off@outlook.com"> tax-off@outlook.com</a>
                    <span className="topbar-divider" />
                    <Phone size={18} />
                    <a href="tel:+17042806683"> (704) 280-6683</a>
                </div>
            </div>
        </div>
    )
}

export default TopBar