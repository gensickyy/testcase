import {
    Container,
    makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import {PRODUCT_NAME} from "../../constants/titles";
import {Link, useParams} from "react-router-dom";
import {getProductFetch} from "../../redux/actions/productActions";
import {connect} from "react-redux";
import {useEffect, useState} from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#9ddaff',
        minHeight: '100%',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}));

const Product = props => {
    const classes = useStyles();
    const { productId } = useParams()
    const {getProduct,products} = props;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        getProduct(productId).then(json=>{
            setProduct(products.find(product => product.id == productId))
        });
    }, [getProduct]);
    return (
        <Page
            className={classes.root}
            title={`${PRODUCT_NAME}-Product`}
        >
            <Container maxWidth={false}>
                {product?(
                    <div>
                        <h2>name: {product.name}</h2>
                        <h3>count: {product.count}</h3>
                        <h3>size: width - {product.size.width}, height - {product.size.height}</h3>
                        <h3>weight: {product.weight}</h3>
                        <h3>comments:</h3>
                        {product.comments?product.comments.map(comment => (
                            <div key={comment.id}>
                                <h4>description: {comment.description}</h4>
                                <h4>date: {comment.date}</h4>
                            </div>
                        )):null}
                        <div>
                            <Link to={`/edit-product/${productId}`}>
                                Update this product
                            </Link>
                        </div>
                        <div>
                            <Link to={`/products`}>
                                Back
                            </Link>
                        </div>
                    </div>
                ):(<div><h2>loading...</h2></div>)}
            </Container>
        </Page>
    );
};

const mapStateToProps = (store) => ({
    products: store.product.products,
});
const mapDispatchToProps = (dispatch) => ({
    getProduct: (id) => getProductFetch(dispatch,id),
});
export default connect(mapStateToProps,mapDispatchToProps)(Product);