// @flow
import React from 'react';
import injectSheet from 'react-jss';

type Props = {
    shoppingCart: Object,
    onChoiceItem: Function,
    classes: Object,
}

const styles = {
    label: {
        width: '100%',
        '&:hover': {
            cursor: 'pointer',
        },
    },
};

const ShoppingTable = ({ shoppingCart, onChoiceItem, classes }: Props) => (
    <table className="table table-hover col-12">
        <thead>
            <tr>
                <th scope="col-1">Checkbox</th>
                <th scope="col-6">Name</th>
                <th scope="col-5">Price</th>
            </tr>
        </thead>
        <tbody>
            {shoppingCart.map(elem => (
                <tr key={elem.get('id')}>
                    <td>
                        <label className={classes.label}>
                            <input
                                type="checkbox"
                                name={elem.get('id')}
                                defaultChecked={elem.get('checked')}
                                onClick={() => onChoiceItem(elem.get('id'))} />
                        </label>
                    </td>
                    <td>{elem.get('title')}</td>
                    <td>{elem.get('price')}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
export default injectSheet(styles)(ShoppingTable);
