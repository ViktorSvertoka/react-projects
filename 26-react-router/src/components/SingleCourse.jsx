import { Link, useParams } from 'react-router-dom';
import courses from '../data/courses';

function SingleCourse() {
  const params = useParams();
  const course = courses.find(course => course.slug === params.slug);

  return (
    <>
      <h1>{course.title}</h1>
      <h3>{course.slug}</h3>
      <h4>{course.id}</h4>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
}

export default SingleCourse;
