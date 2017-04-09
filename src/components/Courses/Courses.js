import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseAction from '../../actions/courseAction';
import CourseList from './CourseList';

class Courses extends Component {
    constructor(props, context) {
        super(props, context);

        // this.state = {
        //     course: {
        //         title: ""
        //     }
        // };


        // this.onTitleChange = this.onTitleChange.bind(this);
        // this.onClickSave = this.onClickSave.bind(this);
    }

    // onTitleChange(event) {
    //     let course = this.state.course;
    //     course.title = event.target.value;
    //     this.setState({course: course});
    // }

    // onClickSave() {
    //     // this.setState({courses: [...this.state.courses, this.state.course]});
    //     // this.props.dispatch(courseAction.createCourse(this.state.course));
    //     this.props.actions.createCourse(this.state.course);
    // }

    courseItem(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.props.courses} />
            </div>
        );
    }
}

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

/**
 * Bind all actions together.
 * If you want only one:
 * return {
 *      createCourse: course => dispatch(courseAction.createCourse(course))
 * };
 *
 * or
 *
 * createCourse: bindActionCreators(courseAction.createCourse, dispatch)
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
