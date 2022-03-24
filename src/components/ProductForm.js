import {Button, TextField} from "@material-ui/core";
import {useCallback, useState} from "react";

const ProductForm = props => {
    const {submit, buttonText, product} = props;
    const [name, setName] = useState(product?product.name:'');
    const [imgUrl, setImgUrl] = useState(product?product.imgUrl:'');
    const [count, setCount] = useState(product?product.count:0);
    const [width, setWidth] = useState(product?product.size.width:0);
    const [height, setHeight] = useState(product?product.size.height:0);
    const [weight, setWeight] = useState(product?product.weight:'');
    const onSubmit = useCallback(() => {
        submit({name, imgUrl, count, size: {width, height}, weight})
    }, [submit, name, imgUrl, count, width, height, weight])
    return (
        <div>
            <div>
                <TextField
                    label="Name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </div>
            <div>
                <TextField
                    label="Img Url"
                    value={imgUrl}
                    onChange={event => setImgUrl(event.target.value)}
                />
            </div>
            <div>
                <TextField
                    type="number"
                    label="Count"
                    value={count}
                    onChange={event => setCount(event.target.value)}
                />
            </div>
            <div>
                <TextField
                    type="number"
                    label="Width"
                    value={width}
                    onChange={event => setWidth(event.target.value)}
                />
            </div>
            <div>
                <TextField
                    type="number"
                    label="Height"
                    value={height}
                    onChange={event => setHeight(event.target.value)}
                />
            </div>
            <div>
                <TextField
                    label="Weight"
                    value={weight}
                    onChange={event => setWeight(event.target.value)}
                />
            </div>
            <Button
                onClick={onSubmit}
                color="primary"
                variant="outlined"
                disabled={!name || !imgUrl || !weight}
            >
                {buttonText}
            </Button>
        </div>
    );
};

export default ProductForm;
