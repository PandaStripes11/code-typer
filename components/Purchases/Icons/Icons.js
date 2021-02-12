import Image from 'next/image'

export default function Icons() {
    return (
        <aside>
            <button>
                <Image 
                    src="/shopping-cart.png"
                    width={30}
                    height={30}
                    className="store"
                />
                &nbsp;Store
            </button>
            <button className="battle-pass">
                <Image
                    src="/battle-pass.png"
                    width={30}
                    height={30}
                    className="battle-pass"
                />
                &nbsp;Battle Pass
            </button>
        </aside>
    )
}