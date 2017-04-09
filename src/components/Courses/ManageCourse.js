import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseAction from '../../actions/courseAction';
import CourseForm from './CourseForm';

class ManageCourse extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }

    render() {
        return (
            <CourseForm
                course={this.state.course}
                errors={this.state.errors}
                allAuthors={this.props.authors} />
        );
    }
}

ManageCourse.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    let course = {id: '', href: '', title: '', authorId: '', length: '', category: ''};

    const authorForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    });

    return {
        course: course,
        authors: authorForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
