import React from 'react'
import Lottie from "react-lottie";
import animationFail from "./fail.json";
import { updateData } from "./../../redux/actions/data";
import { connect } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'

const Fail = ({
    updateData,
}) => {

    return (
        <div style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100vh',
            width: '100vw'
        }}>
            <div
                style={{ height: '30%' }}
            >
                <Lottie
                    isClickToPauseDisabled={true}
                    options={{
                        loop: true,
                        autoplay: true,
                        renderer: "svg",
                        animationData: animationFail,
                        rendererSettings: {},
                    }}
                />
            </div>
            <Button
                onClick={() => updateData('https://localhost:8080/api')} //'http://localhost:8080/api'   
            >
                <Icon name='refresh' /> Réessayer
            </Button>
        </div>
    );
};

const mapDispatchToProps = {
    updateData: updateData,
};

export default connect(null, mapDispatchToProps)(Fail)