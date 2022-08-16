import {useLocation, Link} from 'react-router-dom'
 const Breadcrumbs = () => {
    const location = useLocation();
    const breadCrumbView = () => {
        const { pathname } = location;
        const pathnames = pathname.split("/").filter((item) => item);
        const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
        return (
          <div>
            <ul className='breadCrubs'>
              {pathnames.length > 0 ? (
                  <li><Link to="/">Home</Link></li>
              ) : (
                <li>Home</li>
              )}
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                  <li>{capatilize(name)}</li>
                ) : (
                  <li>
                    <Link to={`${routeTo}`}>{capatilize(name)}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      };
    
      return <>{breadCrumbView()}</>;
}

export default Breadcrumbs;
