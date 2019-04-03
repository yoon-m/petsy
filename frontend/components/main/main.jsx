import React from 'react';

class Main extends React.Component {
    handleL(e) {
        const width = $('.slide-container').width();
        const pos = $('.slide-container').scrollLeft();

        if (pos === width) {
            $('.slide-container').animate({ scrollLeft: 0 }, 400);    
        } else if (pos > width) {
            $('.slide-container').animate({ scrollLeft: `${width}` }, 400);    
        }
    }

    handleR(e) {
        const width = $('.slide-container').width();
        const pos = $('.slide-container').scrollLeft();

        if (pos === 0) {
            $('.slide-container').animate({scrollLeft: `${width}`}, 400);
        } else if (pos === width) {
            $('.slide-container').animate({ scrollLeft: `${width}` * 2}, 400);
        }
    }

    componentDidUpdate(prevProps) {
        location.reload();
    }

    render() {
        if (this.props.currentUser) {
            return (
                <>
                    <div className='personalized-container'>
                        <h3>Our picks for {this.props.currentUser.first_name}</h3>
                        <a href='/#/products'>See more</a>
                        
                        <span className='p-left-btn' onClick={this.handleL}>{`<`}</span>
                        <span className='p-right-btn' onClick={this.handleR}>{`>`}</span>

                        <div className='slide-container'>
                            <div className='personalized-item-container pi1 pi-visible'>
                                <div className='gift1 gift'><a href='/#/products'>
                                    <img src={window.personalized1} />
                                    <div className='gift-text'>
                                        <p>Women's Fashion</p>
                                    </div></a>
                                </div>

                                <div className='gift2 gift'><a href='/#/products'>
                                    <img src={window.personalized1} />
                                    <div className='gift-text'>
                                        <p>Personalized and custom jewelery</p>
                                    </div></a>
                                </div>

                                <div className='gift3 gift'><a href='/#/products'>
                                    <img src={window.personalized1} />
                                    <div className='gift-text'>
                                        <p>Home gallery</p>
                                    </div></a>
                                </div>

                                <div className='gift4 gift'><a href='/#/products'>
                                    <img src={window.personalized1} />
                                    <div className='gift-text'>
                                        <p>Petsy weddings</p>
                                    </div></a>
                                </div>

                                <div className='gift5 gift'><a href='/#/products'>
                                    <img src={window.personalized1} />
                                    <div className='gift-text'>
                                        <p>DIY craft projects</p>
                                    </div></a>
                                </div>

                                <div className='gift6 gift'><a href='/#/products'>
                                    <img src={window.personalized1} />
                                    <div className='gift-text'>
                                        <p>One-of-a-kind gift ideas</p>
                                    </div></a>
                                </div>
                            </div>

                            <div className='personalized-item-container pi2'>
                                <div className='gift1 gift'><a href='/#/products'>
                                    <img src={window.personalized2} />
                                    <div className='gift-text'>
                                        <p>Women's Fashion</p>
                                    </div></a>
                                </div>

                                <div className='gift2 gift'><a href='/#/products'>
                                    <img src={window.personalized2} />
                                    <div className='gift-text'>
                                        <p>Personalized and custom jewelery</p>
                                    </div></a>
                                </div>

                                <div className='gift3 gift'><a href='/#/products'>
                                    <img src={window.personalized2} />
                                    <div className='gift-text'>
                                        <p>Home gallery</p>
                                    </div></a>
                                </div>

                                <div className='gift4 gift'><a href='/#/products'>
                                    <img src={window.personalized2} />
                                    <div className='gift-text'>
                                        <p>Petsy weddings</p>
                                    </div></a>
                                </div>

                                <div className='gift5 gift'><a href='/#/products'>
                                    <img src={window.personalized2} />
                                    <div className='gift-text'>
                                        <p>DIY craft projects</p>
                                    </div></a>
                                </div>

                                <div className='gift6 gift'><a href='/#/products'>
                                    <img src={window.personalized2} />
                                    <div className='gift-text'>
                                        <p>One-of-a-kind gift ideas</p>
                                    </div></a>
                                </div>
                            </div>

                            <div className='personalized-item-container pi3'>
                                <div className='gift1 gift'><a href='/#/products'>
                                    <img src={window.personalized3} />
                                    <div className='gift-text'>
                                        <p>Women's Fashion</p>
                                    </div></a>
                                </div>

                                <div className='gift2 gift'><a href='/#/products'>
                                    <img src={window.personalized3} />
                                    <div className='gift-text'>
                                        <p>Personalized and custom jewelery</p>
                                    </div></a>
                                </div>

                                <div className='gift3 gift'><a href='/#/products'>
                                    <img src={window.personalized3} />
                                    <div className='gift-text'>
                                        <p>Home gallery</p>
                                    </div></a>
                                </div>

                                <div className='gift4 gift'><a href='/#/products'>
                                    <img src={window.personalized3} />
                                    <div className='gift-text'>
                                        <p>Petsy weddings</p>
                                    </div></a>
                                </div>

                                <div className='gift5 gift'><a href='/#/products'>
                                    <img src={window.personalized3} />
                                    <div className='gift-text'>
                                        <p>DIY craft projects</p>
                                    </div></a>
                                </div>

                                <div className='gift6 gift'>
                                    <a href='/#/products'>See more</a><span> ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='main-auth-container'>
                        <div className='main-auth-header-container'>
                            <h2>If it’s handcrafted, vintage, custom, or unique, it’s on Petsy.</h2>
                        </div>

                        <div className='main-flex-container'>
                            <div className='main-auth-left-container'><a href='/#/products'>
                                <div className='main-auth-left'>
                                    <div className='main-left-yellow'>
                                        <h3>Let imagination light up your life.</h3>
                                        <p>Shop Home & Living ></p>
                                    </div>
                                    <img src={window.mainLeft} />
                                </div></a>
                            </div>

                            <div className='main-auth-right-container'>
                                <a href='/#/products'>
                                    <div className='main-right-top'>
                                        <h4>Find your perfect "I do" details.</h4>
                                        <p>Shop wedding ></p>
                                    </div>
                                </a>

                                <a href='/#/products'><div className='main-right-yellow'>
                                    <p>Get it quick with ready-to-ship finds ></p>
                                </div></a>
                            </div>
                        </div>

                        <div className='check-container'>
                            <div className='check'>
                                <i className="fas fa-check"></i><h6> Unique everything</h6>
                                <p>We have millions of one-of-a-kind items, so you
                                    can find whatever you need (or really, really want).</p>
                            </div>

                            <div className='check'>
                                <i className="fas fa-check"></i><h6> Independent sellers</h6>
                                <p>Buy directly from someone who put their heart
                                    and soul into making something special.</p>
                            </div>

                            <div className='check'>
                                <i className="fas fa-check"></i><h6> Secure Shopping</h6>
                                <p>We use best-in-class technology to protect your transactions.</p>
                            </div>
                        </div>

                        <div className='popular-container'>
                            <h3>Popular right now</h3>
                            <div className='popular-item-container'>
                                <div className='gift1 gift'><a href='/#/products'>
                                    <img src={window.popular1} />
                                    <div className='gift-text'>
                                        <p>Women's Fashion</p>
                                    </div></a>
                                </div>

                                <div className='gift2 gift'><a href='/#/products'>
                                    <img src={window.popular1} />
                                    <div className='gift-text'>
                                        <p>Personalized and custom jewelery</p>
                                    </div></a>
                                </div>

                                <div className='gift3 gift'><a href='/#/products'>
                                    <img src={window.popular1} />
                                    <div className='gift-text'>
                                        <p>Home gallery</p>
                                    </div></a>
                                </div>

                                <div className='gift4 gift'><a href='/#/products'>
                                    <img src={window.popular1} />
                                    <div className='gift-text'>
                                        <p>Petsy weddings</p>
                                    </div></a>
                                </div>

                                <div className='gift5 gift'><a href='/#/products'>
                                    <img src={window.popular1} />
                                    <div className='gift-text'>
                                        <p>DIY craft projects</p>
                                    </div></a>
                                </div>

                                <div className='gift6 gift'><a href='/#/products'>
                                    <img src={window.popular1} />
                                    <div className='gift-text'>
                                        <p>One-of-a-kind gift ideas</p>
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }

    }
}

export default Main;