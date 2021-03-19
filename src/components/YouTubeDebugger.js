import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    handleBitrateChange = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    handleResolutionChange = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        });
    }

    render() {
        return(
            <div>
                <button label='update bitrate' className='bitrate' onClick={this.handleBitrateChange}>
                    
                </button>
                <button label='update resolution' className='resolution' onClick={this.handleResolutionChange}>
                   
                </button>
            </div>
        )
    }

}

export default YouTubeDebugger
