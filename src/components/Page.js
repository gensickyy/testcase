import {Helmet} from 'react-helmet';

const Page = ({
                  children,
                  title = '',
                  ...rest
              }) => {
    return (
        <div
            {...rest}
        >
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </div>
    );
};

export default Page;
