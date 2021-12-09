import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { listProductAsync } from '../actions/actionProducts';
import { ListProducts } from './ListProducts';

export const Products = () => {

      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(listProductAsync())
      }, [dispatch])

      return (
        <div>
          <ListProducts/>
        </div>
      );
}
