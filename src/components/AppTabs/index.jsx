import { useContext, useState } from "react";
import "./tabs.css";
import { AppContext } from "../../App";

function AppTabs({ defaultActive = 0 }) {
    const {Products} = useContext(AppContext)
    const product = Products[0]
  const [activeTab, setActiveTab] = useState(defaultActive);

  return (
    <div className="tabs-container">
      {/* Tab Headers */}
      
      <div className="tabs-header">
        <button
            className={`tab-btn ${activeTab === 0 ? "active" : ""}`}
            onClick={() => setActiveTab(0)}
          >
            Description
          </button>

          <button
            className={`tab-btn ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            Additional Information
          </button>
          <button
            className={`tab-btn ${activeTab === 2 ? "active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            Reviews
          </button>      
      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        {activeTab === 0 && <div className="tab-content">
            {product?.description}
        </div>}
        
        {activeTab === 1 && (
        <div className="tab-content">
            <div className="addtional-info">
                <ul>
                    {product.brand && <li><strong>Brand</strong><span>{product.brand}</span></li>}             
                    {product.type && <li><strong>Type</strong><span>{product.type}</span></li>}               
                    {product.fabric && <li><strong>Fabric</strong><span>{product.fabric}</span></li>}            
                    {product.category && <li><strong>Category</strong><span>{product.category}</span></li>}    
                    {product.trend && <li><strong>Trend</strong><span>{product.trend}</span></li>} 
                </ul>
            </div>
        </div>
        )}
        {activeTab === 2 && 
        <div className="tab-content">
            Reviews
        </div>
        }
      </div>
    </div>
  );
}

export default AppTabs;
