import React, {Component} from 'react';

class DragBar extends Component {
    state = {
        pixelsPerProject: this.props.pixelsPerProject,
        transform: this.props.transform
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions, true);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions, true);

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            pixelsPerProject: nextProps.pixelsPerProject,
            transform: nextProps.transform
        });
    }

    updateDimensions = () => {
        const width = this.refs.dragContainer.offsetWidth;
        this.props.callBackWidth(width);
    };

    render() {
        return (
            <div className="drag-bar">
                    <span
                        onMouseDown={(e) => this.props.handleDragStart(e)}
                        onTouchStart={(e) => this.props.handleTouchStart(e, true)}
                        style={{
                            width: this.state.pixelsPerProject,
                            transform: "translateX(" + this.state.transform + "px)"
                        }}>
                    </span>
                <div className="drag-circle"></div>
                <hr ref="dragContainer"/>
            </div>
        );
    }
}

export default DragBar;
