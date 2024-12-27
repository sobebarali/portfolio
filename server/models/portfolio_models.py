from pydantic import BaseModel
from typing import Optional


class PortfolioEntryCreate(BaseModel):
    content: str


class PortfolioEntryResponse(BaseModel):
    id: int
    content: str
    embedding: Optional[list[float]]


class QueryRequest(BaseModel):
    query: str


class QueryResponse(BaseModel):
    content: str
    similarity: float