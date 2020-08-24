import React from "react";

function Cards() {
    return (
        <section id="features">
            <div className="container-fluid">
                <div className="row">
                    <div className="feature-div col-lg-4">
                        <i class="fas fa-check-circle fontawesome fa-4x"></i>   
                        <h3 class="feature-heading">Easy to use.</h3>
                        <p class="feature-para">So easy to use and handle material ui</p>
                    </div>
                    <div className="feature-div col-lg-4">
                    <i class="fa fa-shield fa-4x" aria-hidden="true"></i>
                        <h3 class="feature-heading">Highly Secure & Protected</h3>
                        <p class="feature-para">No system or server piracy .</p>
                    </div>
                    <div className="feature-div col-lg-4">
                        <i class="fa fa-handshake-o fa-4x" aria-hidden="true"></i>
                        <h3 class="feature-heading">Easy to Handle.</h3>
                        <p class="feature-para">Very handle with quality content.</p>
                    </div>

                </div>

            </div>

        </section>
    )
}
export default Cards;