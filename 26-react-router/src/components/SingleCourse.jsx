import { Link, useParams } from 'react-router-dom';
import courses from '../data/courses';
import NotFound from './NotFound';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

function SingleCourse() {
  const params = useParams();
  const course = courses.find(course => course.slug === params.slug);
  if (!course) {
    return <NotFound />;
  }

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!course) {
  //     navigate('..', { relative: 'path' });
  //   }
  // }, [course, navigate]);

  // return (
  //   <>
  //     <h1>{course?.title}</h1>
  //     <h2>{course?.slug}</h2>
  //     <h4>{course?.id}</h4>
  //     <Link to=".." relative="path">
  //       All courses
  //     </Link>
  //   </>
  // );

  return (
    <>
      <h1>{course.title}</h1>
      <h2>{course.slug}</h2>
      <h4>{course.id}</h4>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
}

export default SingleCourse;
