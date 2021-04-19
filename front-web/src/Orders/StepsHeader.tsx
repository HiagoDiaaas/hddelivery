const StepsHeader = () => {
    return (
        <header className='orders-steps-container'>
            <div className='orders-steps-content'>
                <h1 className='steps-title'>
                    FOLLOW THE <br/> STEPS
                </h1>
                <ul className='steps-items'>
                    <li>
                        <span className='steps-number'>
                            1
                        </span>
                        Select the products and location.
                    </li>
                    <li>
                        <span className='steps-number'>
                            2 
                        </span>
                        Then click in <strong>"SEND ORDER"</strong>
                    </li>
                    <li>
                        <span className='steps-number'>

                        </span>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default StepsHeader;