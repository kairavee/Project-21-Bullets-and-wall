function hasCollide(bullets,walls)
{
  bulletRightEdge=bullets.x +bullets.width;
  wallLeftEdge=walls.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}

