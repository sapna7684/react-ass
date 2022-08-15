import React from 'react'
import {StyledProfile, UserContentWrapper, Column, UserImage, Img, UserName, Title, List, SubTitle, ListItems} from './common/style/Profile.Styled'
import UseAuth from './protectedRoutes/UseAuth'
export const Profile = () => {
  const {auth} = UseAuth()

  return (
    <StyledProfile>
    <Title>User Profile</Title>
    <UserContentWrapper>
      <Column width_25>
      <UserImage>
        <Img src='https://source.unsplash.com/400x400/?user' />
      </UserImage>
        <UserName>{auth?.profile.userName} {auth?.profile.LastName}</UserName>
      </Column>
      <Column>
        <SubTitle>User profile</SubTitle>
          <List>
            <ListItems> <span>Gender:</span> {auth?.profile.gender}</ListItems>
            <ListItems> <span>Date of birth:</span> {auth?.profile.dateOfBirth}</ListItems>
            <ListItems> <span>Phone Number:</span> {auth?.profile.phoneNumber}</ListItems>
            <ListItems> <span>Email ID:</span> {auth?.profile.email}</ListItems>
          </List>
        <SubTitle>Address Details:</SubTitle>
          <List>
            <ListItems> <span>Addres:</span> {auth?.profile.addressLine1}, {auth?.profile.addressLine2}</ListItems>
            <ListItems> <span>City:</span> {auth?.profile.city}</ListItems>
            <ListItems> <span>State:</span> {auth?.profile.state}</ListItems>
            <ListItems> <span>zipCode:</span> {auth?.profile.zipCode}</ListItems>
          </List>
      </Column>
    </UserContentWrapper>
    </StyledProfile>
  )
}
