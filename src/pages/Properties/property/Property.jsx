import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty } from '../../../utils/api'
import { PuffLoader } from "react-spinners"
import { AiFillHeart } from 'react-icons/ai'
import Map from '../../../components/Map/Map'
import './Property.css'

import { FaShower } from 'react-icons/fa'
import { AiTwotoneCar } from 'react-icons/ai'
import { MdLocationPin, MdMeetingRoom } from 'react-icons/md'

const Property = () => {
  const { pathname } = useLocation()
  const id = pathname.split("/").slice(-1)[0]
  const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id))

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader></PuffLoader>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    )
  }
  return (
    <div className='wrapper'>
      <div className="flexColStart paddings innerWidth property-container">
        <div className="like">
          <AiFillHeart size={24} color='white'></AiFillHeart>
        </div>

        <img src={data?.image} alt="home image" />

        <div className="flexCenter property-details">
          <div className="flexColStart left">
            <div className="flexStart head">
              <span className='primaryText'>{data?.title}</span>
              <span className='orangeText' style={{ fontSize: '1.5rem' }}> $ {data?.price}</span>
            </div>

            <div className="flexStart facilities">
              <div className="flexStart facility">
                <FaShower size={20} color="#1f3e72"></FaShower>
                <span>{data?.facilities?.bathrroms} Bathrooms</span>
              </div>
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1f3e72"></AiTwotoneCar>
                <span>{data?.facilities?.parkings} Parkings</span>
              </div>
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1f3e72"></MdMeetingRoom>
                <span>{data?.facilities?.bedrooms} Room/s</span>
              </div>
            </div>

            <span className='secodaryText' style={{textAlign: "justify"}}>
              {data?.description}
            </span>

            <div className="flexStart" style={{gap: "1rem"}}>
              <MdLocationPin > </MdLocationPin>
                <span className='secondaryText'>
                  {
                    data?.address
                  }
                  {
                    data?.city
                  }
                  {
                    data?.country
                  }
                </span>
             
            </div>

            <button className="button">
              Book Your visit
            </button>
          </div>



          <div className="map">
            <Map address={data?.address} city={data?.city} country={data?.country}></Map>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property