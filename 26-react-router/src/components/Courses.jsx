import { Link } from 'react-router-dom';
import courses from '../data/courses';

function Courses() {
  return (
    <>
      <h1>Courses</h1>
      {courses.map(course => {
        return (
          <div key={course.id}>
            <Link to={course.slug} className="courseLink">
              {course.title}
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Courses;
