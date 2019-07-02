import React, {Component} from 'react';

class DragBar extends Component {
    dragContainer = React.createRef();

    componentDidMount() {
      this.updateDimensions();
      window.addEventListener('resize', this.updateDimensions, true);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions, true);

    }

    updateDimensions = () => {
      const width = this.dragContainer.current.offsetWidth;
      this.props.callBackWidth(width);
    };

    render() {
      return (
        <div className="drag-bar">
          <span
            onMouseDown={(e) => this.props.handleDragStart(e)}
            onTouchStart={(e) => this.props.handleTouchStart(e, true)}
            style={{
              width: this.props.pixelsPerProject,
              transform: 'translateX(' + this.props.transform + 'px)'
            }}>
          </span>
          <div className="drag-circle"></div>
          <hr ref={this.dragContainer} />
        </div>
      );
    }
}

export default DragBar;
