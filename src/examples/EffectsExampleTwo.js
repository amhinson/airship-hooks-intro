import React, { Component, useState, useEffect } from 'react';
import { MyAPI } from './utils';

export default class UseEffectDemo extends Component {
  state = {
    project: 'Bulbasaur'
  };

  render() {
    const { project } = this.state;

    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              project: project === 'Bulbasaur' ? 'Charmander' : 'Bulbasaur'
            })
          }
          className="nes-btn"
        >
          Change Project
        </button>
        <br />
        <UseEffectComponent project={project} />
        {/* <UseEffectFunction project={project} /> */}
      </div>
    );
  }
}

class UseEffectComponent extends Component {
  state = {
    timeOnProject: 0
  };

  componentDidMount() {
    MyAPI.subscribe(timeOnProject => {
      this.setState({ timeOnProject });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.project !== prevProps.project) {
      MyAPI.unsubscribe();
      this.setState({ timeOnProject: 0 });
      MyAPI.subscribe(timeOnProject => {
        this.setState({ timeOnProject });
      });
    }
  }

  componentWillUnmount() {
    MyAPI.unsubscribe();
  }

  render() {
    const { project } = this.props;
    const { timeOnProject } = this.state;

    return (
      <div>
        <h1>Project: {project}</h1>
        <h2>
          Time on project: <br />
          {timeOnProject}
        </h2>
      </div>
    );
  }
}

function UseEffectFunction(props) {
  const { project } = props;
  const [timeOnProject, setTimeOnProject] = useState(0);

  useEffect(() => {
    MyAPI.subscribe(time => {
      setTimeOnProject(time);
    });

    return () => {
      MyAPI.unsubscribe();
      setTimeOnProject(0);
    };
  }, [project]);

  return (
    <div>
      <h1>Project: {project}</h1>
      <h2>
        Time on project: <br />
        {timeOnProject}
      </h2>
    </div>
  );
}
