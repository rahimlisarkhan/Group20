import { Component } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

class AboutHR extends Component {
  render() {
    return <h1>AboutHR</h1>;
  }
}

class AboutWork extends Component {
  render() {
    return <h1>AboutWork</h1>;
  }
}

export class AboutPage extends Component {
  render() {
    return (
      <main>
        <h1>AboutPage</h1>
        <div>
          <Link to="hr">about hr</Link>
          <br />

          <Link to="work">about work</Link>
        </div>
        <br />
        <br />
        <br />
        <Routes>
          <Route path="hr" element={<AboutHR />} />
          <Route path="/" element={<Navigate to="hr" replace />} />
          <Route path="work" element={<AboutWork />} />
        </Routes>
        {/* { !user && <Navigate to="/login" replace={true}/>} */}
      </main>
    );
  }
}
