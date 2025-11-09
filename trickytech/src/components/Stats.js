import React from 'react';
import CountUp from 'react-countup';
import '../style/Stats.css';

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="border-bottom pb-50 lg-pb-20 mt-60 lg-mt-30">
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <div className="counter-block-one mt-25 text-center">
                            <div className="main-count fw-600 text-dark">
                                <CountUp end={10} duration={5} /> million
                            </div>
                            <p>Completed Jobs</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="counter-block-one mt-25 text-center">
                            <div className="main-count fw-600 text-dark">
                                <CountUp end={50} duration={5} />k+
                            </div>
                            <p>Worldwide Client</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="counter-block-one mt-25 text-center">
                            <div className="main-count fw-600 text-dark">
                                <CountUp end={15} duration={5} /> billion
                            </div>
                            <p>Dollar Payout</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;