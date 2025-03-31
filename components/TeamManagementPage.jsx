import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './TeamManagementPage.css';
import { FiSearch, FiPlus, FiGrid, FiBarChart2, FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';

const TeamManagementPage = () => {
    const navigate = useNavigate(); // Initialize navigate

    // Logout handler
    const handleLogout = () => {
        navigate('/'); // Redirect to the landing page
    };

    return (
        <div className="d-flex vh-100">
            <aside className="sidebar bg-white border-end p-4 d-flex flex-column" style={{width: '250px'}}>
                <h1 className="h5 mb-4 fw-semibold">HabitTrack</h1>
                <nav className="flex-grow-1">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link className="nav-link d-flex align-items-center gap-2 text-secondary" to="/dashboard"><FiGrid size={18} />Dashboard</Link></li>
                        <li className="nav-item mb-2"><Link className="nav-link d-flex align-items-center gap-2 text-secondary" to="/statistics"><FiBarChart2 size={18} />Statistics</Link></li>
                        <li className="nav-item mb-2"><Link className="nav-link d-flex align-items-center gap-2 text-dark fw-medium" to="/team"><FiUsers size={18} />Team</Link></li>
                        <li className="nav-item mb-2"><Link className="nav-link d-flex align-items-center gap-2 text-secondary" to="/settings"><FiSettings size={18} />Settings</Link></li>
                    </ul>
                </nav>
                <div className="user-info border-top pt-3 mt-auto">
                    <p className="text-secondary small mb-1">Signed in as:</p>
                    <p className="mb-1 fw-medium">User</p>
                    <p className="text-secondary small mb-3">B22AI014@kitsw.ac.in</p>
                    <button onClick={handleLogout} className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2"><FiLogOut size={16} />Log out</button>
                </div>
            </aside>

            <main className="flex-grow-1 bg-white p-4 overflow-auto">
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <h2 className="h3 mb-2 fw-semibold">Team</h2>
                        <p className="text-muted mb-0" style={{color: '#667085'}}>Manage your team members and their access</p>
                    </div>
                    <button className="btn btn-primary px-4 py-2 fw-medium d-flex align-items-center gap-2" style={{backgroundColor: '#111322', borderRadius: '8px'}}>
                        <FiPlus size={18} />
                        Invite Team Member
                    </button>
                </div>

                <div className="position-relative mb-4">
                    <FiSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" style={{fontSize: '1.1rem'}} />
                    <input type="text" className="form-control ps-5" placeholder="Search team members..." />
                </div>

                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm" style={{borderRadius: '16px'}}>
                            <div className="card-body d-flex align-items-center gap-3 p-4">
                                <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                                    <span className="fw-medium text-primary">AJ</span>
                                </div>
                                <div>
                                    <h3 className="h6 mb-1 fw-semibold">Alex Johnson</h3>
                                    <p className="text-muted small mb-1">Team Lead</p>
                                    <p className="text-muted small mb-0">alex@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm" style={{borderRadius: '16px'}}>
                            <div className="card-body d-flex align-items-center gap-3 p-4">
                                <div className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                                    <span className="fw-medium text-success">JS</span>
                                </div>
                                <div>
                                    <h3 className="h6 mb-1 fw-semibold">Jamie Smith</h3>
                                    <p className="text-muted small mb-1">Developer</p>
                                    <p className="text-muted small mb-0">jamie@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm" style={{borderRadius: '16px'}}>
                            <div className="card-body d-flex align-items-center gap-3 p-4">
                                <div className="rounded-circle bg-info bg-opacity-10 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                                    <span className="fw-medium text-info">ML</span>
                                </div>
                                <div>
                                    <h3 className="h6 mb-1 fw-semibold">Morgan Lee</h3>
                                    <p className="text-muted small mb-1">Designer</p>
                                    <p className="text-muted small mb-0">morgan@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 border-0 bg-white" style={{borderRadius: '16px', border: '1px dashed #D0D5DD'}}>
                            <div className="card-body d-flex flex-column align-items-center justify-content-center gap-2 p-4">
                                <div className="rounded-circle bg-gray-50 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                                    <FiPlus size={20} className="text-gray-600" />
                                </div>
                                <span className="text-gray-600 fw-medium">Add Team Member</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TeamManagementPage;